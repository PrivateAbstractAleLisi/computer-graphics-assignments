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

function circle(x, y) {
    return x * x + y * y;
}

function buildHalfSphere(detail) {
    var pos = 0
    var vertices = [];
    let rPow2 = 9
    for (let i = 0; i < detail; i++) {
        for (let j = 0; j < detail; j++) {

            var x = map2Range(i, 0.0, detail-1, -3.0, 3.0);
            var z = map2Range(j, 0.0, detail-1, -3.0, 3.0);

            if (circle(x, z) <= rPow2) {
                let y = Math.sqrt(rPow2 - x * x - z * z);
                vertices[pos] = [x, y, z]
                pos = pos + 1;
            }

        }
    }
    return vertices
}

function degToRad(deg) {
    return Math.PI * deg / 180.0;
}
function halfSphere(density) {

    var vertices = [];
    var pos = 0;
    for (let theta = 0.0; theta < density; theta++) {
        let vth = theta * (Math.PI / density)
        for (let phi = 0; phi < density; phi++) {
            let vphi = phi * (Math.PI/ density)
            let x = Math.sin(vth) * Math.cos(vphi)
            let y = Math.sin(vth) * Math.sin(vphi)
            let z = Math.cos(vth)

            vertices[pos] = [x,y ,  z];
            pos ++

        }
    }

    /*dump
    var dumped = []
    var pos = 0
    for (let theta = 0.0; theta < density; theta++) {
        for (let phi = -density; phi < density; phi++) {
            dumped[pos] = vertices[theta][phi + density];
            pos = pos +1;
        }
    }*/
    return vertices;

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

            //split the square into two tris
            //let lowerTri = [bottom_left, bottom_right, top_left] // I\
            //let upperTri = [top_left, top_right, bottom_right]   // \I
            //trisList[pos] = lowerTri;
            //trisList[pos+1] = upperTri;
            //pos = pos + 2
            //upper
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
function sphereToTris(sphere, density) {
    var tri = [];
    var pos = 0;
    for (let ntita = 0.0; ntita < density; ntita++) {
        for (let nphi = 0; nphi < density; nphi++) {

            let current = ntita*density + nphi;
            let base = ntita*density;
            tri[pos] = current
            tri[pos+1] = current + 1
            tri[pos+2] = (ntita-1)*density + nphi
            pos += 3

            tri[pos] =   current + 1
            tri[pos+1] = (ntita-1)*density + nphi +1
            tri[pos+2] = (ntita-1)*density + nphi
            pos += 3
        }
    }
    return tri
}
function buildGeometry() {



    // Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
    ///// Creates vertices
    var vert2 = buildSinCos();
    var ind2 = toTris(vert2);


    var color2 = [0.0, 0.0, 1.0];
    addMesh(vert2, ind2, color2);
    // Draws a Half Sphere
    ///// Creates vertices
    let d = 5;
    var vert3 = halfSphere(d, 3);
    var ind3 = sphereToTris(vert3, d)


    var color3 = [0.0, 0.15, 0.8];
    addMesh(vert3, ind3, color3);
}

