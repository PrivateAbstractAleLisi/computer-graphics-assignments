const granularity = 30;

//from x in a,b to y in c,d
function mapToRange(X, A, B, C, D) {
    return (X - A) / (B - A) * (D - C) + C;
}

function map2Range(X, A, B, C, D) {

    let offset = C;
    let ratio = (D - C) / (B - A);
    return ratio * (X - A) + offset;
}

function buildSinCos() {


    var vertices = [];

    var pos = 0;
    var tri = 0;

    for (i = 0; i < granularity; i++) {
        for (j = 0; j < granularity; j++) {

            var x = mapToRange(i, 0, granularity, -3, 3);
            var z = mapToRange(j, 0, granularity, -3, 3);
            var y = Math.sin((x)) * Math.cos((z))
            vertices[pos] = [x, y, z];
            pos = pos + 1;
        }
    }

    return vertices;
}


function degToRad(deg) {
    return Math.PI * deg / 180.0;
}

function toTris(vertices) {
    var trisList = []
    var pos = 0;
    for (let i = 0; i < granularity - 1; i++) {
        for (let j = 0; j < granularity - 1; j++) {

            //get the vertex in position (i,j) and map a square having (i,j) as a bottom, left vertex
            let bottom_left = (i * granularity) + j;
            let bottom_right = bottom_left + 1;
            let top_left = bottom_left + granularity;
            let top_right = top_left + 1;


            trisList[pos] = bottom_left;
            trisList[pos + 1] = bottom_right;
            trisList[pos + 2] = top_left;
            //lower
            trisList[pos + 3] = bottom_right;
            trisList[pos + 4] = top_right;
            trisList[pos + 5] = top_left;
            pos = pos + 6;
        }
    }
    return trisList
}

function buildGeometry() {


    // Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
    ///// Creates vertices
    var vert2 = buildSinCos();
    var ind2 = toTris(vert2);
    var color2 = [0.0, 0.0, 1.0];
    addMesh(vert2, ind2, color2);


    // Draws a Half Sphere


    //=========== Creates vertices ===========
    var vert3 = [];
    let radius = 3;
    //generate sphere using spherical coordinates

    vert3[0] = [0, radius, 0]; //APEX

    var pos = 1;
    for (let theta = 1; theta <= 90; ++theta) { //POINTS by CONCENTRIC CIRCLES
        for (let phi = 0; phi < 360; ++phi) {
            vert3[pos] = [radius * Math.sin(theta * Math.PI / 180.0) * Math.sin(phi * Math.PI / 180.0),
                radius * Math.cos(theta * Math.PI / 180.0),
                radius * Math.sin(theta * Math.PI / 180.0) * Math.cos(phi * Math.PI / 180.0)];
            pos++;
        }
    }
    vert3[pos] = [0, 0, 0] //lower fan center
    let lowerCenterPos = pos

    //=========== Creates indices ===========
    var ind3 = [];
    var count = 0;
    let index = 1;

    while (index < 360) {
        ind3[count++] = 0; //apex
        ind3[count++] = index++;
        ind3[count++] = index;
    } //this generates a triangle fan with the apex as a "root"

    ind3[count++] = 0;
    ind3[count++] = index;
    ind3[count++] = 1;

    var i_limit = 90; //quanti livelli
    var j_limit = 360; //quanti punti per livello circolare
    for (i = 1; i < i_limit; i++) {
        for (j = 1; j < j_limit; j++) {
            ind3[count++] = (j_limit * i + j) - j_limit;
            ind3[count++] = j_limit * i + j;
            ind3[count++] = (j_limit * i + j) + 1;

            ind3[count++] = (j_limit * i + j) - j_limit;
            ind3[count++] = (j_limit * i + j) + 1;
            ind3[count++] = (j_limit * i + j) + 1 - j_limit;
        }
        ind3[count++] = j_limit * i;
        ind3[count++] = j_limit * i + j;
        ind3[count++] = j_limit * i + 1;

        ind3[count++] = j_limit * i;
        ind3[count++] = j_limit * i + 1;
        ind3[count++] = j_limit * i - (j_limit - 1);
    }

    //Bottom triangle fan

    let point = vert3.length - 1;

    //Bottom part
    for(i = 0; i < 360; i++) {
        ind3[count++] = point;
        ind3[count++] = point  - 359 + i;
        ind3[count++] = point - 360 + i;
    }

    //last triangle
    ind3[count++] = point - 1;
    ind3[count++] = point;
    ind3[count++] = point - 360;

    var color3 = [0.3, 0.45, 0.8];
    addMesh(vert3, ind3, color3);
}

