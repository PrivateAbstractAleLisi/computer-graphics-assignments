const granularity = 9;

//from x in a,b to y in c,d
function mapToRange(X, A, B, C, D) {
    return (X - A) / (B - A) * (D - C) + C;
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
function buildHalfSphere(radius, detail) {
    for (let r = 0; r < radius; r++) {
        
    }
}
function toTris(vertices) {
    var trisList = []
    var pos = 0;
    for (let i = 0; i < granularity-1; i++) {
        for (let j = 0; j < granularity-1; j++) {

            //get the vertex in position (i,j) and map a square having (i,j) as a bottom, left vertex
            let bottom_left = (i * granularity) + j;
            let bottom_right = bottom_left+1;
            let top_left = bottom_left + granularity;
            let top_right = top_left+1;

            //split the square into two tris
            //let lowerTri = [bottom_left, bottom_right, top_left] // I\
            //let upperTri = [top_left, top_right, bottom_right]   // \I
            //trisList[pos] = lowerTri;
            //trisList[pos+1] = upperTri;
            //pos = pos + 2
            //upper
            trisList[pos] = bottom_left;
            trisList[pos+1] = bottom_right;
            trisList[pos+2] = top_left;
            //lower
            trisList[pos+3] = bottom_right;
            trisList[pos+4] = top_right;
            trisList[pos+5] = top_left;
            pos = pos + 6;
        }
    }
    return trisList
}

function buildGeometry() {
    var i;


    // Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
    ///// Creates vertices
    var vert2 = buildSinCos();
    var ind2 = toTris(vert2);

    /*////* Creates indices
    var ind2 = [];
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            ind2[6 * (i * 2 + j)] = 3 * j + i;
            ind2[6 * (i * 2 + j) + 1] = 3 * j + i + 1;
            ind2[6 * (i * 2 + j) + 2] = 3 * (j + 1) + i + 1;
            ind2[6 * (i * 2 + j) + 3] = 3 * j + i;
            ind2[6 * (i * 2 + j) + 4] = 3 * (j + 1) + i + 1;
            ind2[6 * (i * 2 + j) + 5] = 3 * (j + 1) + i;
        }
    } */


    var color2 = [0.0, 0.0, 1.0];
    addMesh(vert2, ind2, color2);


    // Draws a Half Sphere
    ///// Creates vertices
    var vert3 = [];
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            x = i - 1;
            z = j - 1;
            vert3[i * 3 + j] = [x, Math.cos(3.14 * (x - z)), z];
        }
    }

    ////// Creates indices
    var ind3 = [];
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            ind3[6 * (i * 2 + j)] = 3 * j + i;
            ind3[6 * (i * 2 + j) + 1] = 3 * j + i + 1;
            ind3[6 * (i * 2 + j) + 2] = 3 * (j + 1) + i + 1;
            ind3[6 * (i * 2 + j) + 3] = 3 * j + i;
            ind3[6 * (i * 2 + j) + 4] = 3 * (j + 1) + i + 1;
            ind3[6 * (i * 2 + j) + 5] = 3 * (j + 1) + i;
        }
    }

    var color3 = [0.0, 1.0, 0.0];
    addMesh(vert3, ind3, color3);
}

