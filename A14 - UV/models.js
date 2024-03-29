function computeCilNorm (i) {
    dx = Math.sin(i/18.0*Math.PI);
    dz = Math.cos(i/18.0*Math.PI);
    res = [dx, 0.0, dz];
    return res
}

function buildGeometry() {
    var i, j;
    // Draws a pyramid --- To complete for the assignment. This is just the one in Assignment 13, where two 0.1, 0.1 UV components have been added to the vertices definitions. Such number must be replaced (differently for each vertexes), to obtain a proper Egyptian Pyramid
    {
        var vert1 = [


            //ENTRANCE (SO)
            [0.0, 1.0, 0.0, 0.0, 0.4472, -0.8944, 0.625, 0.5],
            [1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944, 0.5, 0.25],
            [-1.0, -1.0, -1.0, 0.0, 0.4472, -0.8944, 0.75, 0.25],

            //NO

            [0.0, 1.0, 0.0, 0.8944, 0.4472, 0.0, 0.625, 0.5],
            [1.0, -1.0, 1.0, 0.8944, 0.4472, 0.0, 0.5, 0.25],
            [1.0, -1.0, -1.0, 0.8944, 0.4472, 0.0, 0.75, 0.25],


            //NE

            [0.0, 1.0, 0.0, 0.0, 0.4472, 0.8944,  0.625, 0.25],
            [-1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944,  0.75, 0.0], //lu
            [1.0, -1.0, 1.0, 0.0, 0.4472, 0.8944, 0.5, 0.0], //ru

            //columns

            [0.0, 1.0, 0.0, -0.8944, 0.4472, 0.0, 0.875, 0.5],
            [-1.0, -1.0, -1.0, -0.8944, 0.4472, 0.0, 1, 0.25],
            [-1.0, -1.0, 1.0, -0.8944, 0.4472, 0.0,  0.75, 0.25], //lu

            //THE BASE (SE)
            [-1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 0.75, 0.0],  //lb
            [1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 1, 0.0],  //rb
            [1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 1, 0.25],   //ru
            [-1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 0.75, 0.25]   //lu
        ];
        var ind1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 12, 14, 15];
        var color1 = [0.0, 0.0, 1.0];

    }

    addMesh(vert1, ind1, color1);

    // Draws a cube -- To do for the assignment.
    {

        // Draws a cube -- To do for the assignment.    //PLANE:
        var vert2 = [[-1.0, -1.0, 0.0, 0.0, 0.0, 1.0, 0.125, 0.625], //Z=0
            [1.0, -1.0, 0.0, 0.0, 0.0, 1.0, 0.25, 0.625], //
            [1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.25, 0.75],
            [-1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.125, 0.75],    // 3

            [-1.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.125, 0.625], //Y=-1   // 4
            [1.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.25, 0.625],
            [-1.0, -1.0, -2.0, 0.0, -1.0, 0.0, 0.125, 0.5],
            [1.0, -1.0, -2.0, 0.0, -1.0, 0.0, 0.25, 0.5], 	// 7

            [-1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.125, 0.75], //Y=+1   //8
            [1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.25, 0.75],
            [-1.0, 1.0, -2.0, 0.0, 1.0, 0.0, 0.125, 0.875],
            [1.0, 1.0, -2.0, 0.0, 1.0, 0.0, 0.25, 0.875],   // 11

            [-1.0, 1.0, 0.0, -1.0, 0.0, 0.0, 0.125, 0.75],    //12
            [-1.0, -1.0, 0.0, -1.0, 0.0, 0.0, 0.125, 0.625],
            [-1.0, 1.0, -2.0, -1.0, 0.0, 0.0, 0.0, 0.75],
            [-1.0, -1.0, -2.0, -1.0, 0.0, 0.0, 0.0, 0.625],    //15

            [1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.25, 0.75],     //16
            [1.0, -1.0, 0.0, 1.0, 0.0, 0.0, 0.25, 0.625],
            [1.0, 1.0, -2.0, 1.0, 0.0, 0.0, 0.375, 0.75],
            [1.0, -1.0, -2.0, 1.0, 0.0, 0.0, 0.375, 0.625],     //19

            [-1.0, -1.0, -2.0, 0.0, 0.0, -1.0, 0.125, 1], //Z=0
            [1.0, -1.0, -2.0, 0.0, 0.0, -1.0, 0.25, 1],
            [1.0, 1.0, -2.0, 0.0, 0.0, -1.0, 0.25, 0.875],
            [-1.0, 1.0, -2.0, 0.0, 0.0, -1.0, 0.125, 0.875]


        ];
        var ind2 = [0, 1, 2, 0, 2, 3,

            7, 5, 4, 4, 6, 7,

            8, 9, 10, 11, 10, 9,

            14, 13, 12, 13, 14, 15,

            16, 17, 18, 19, 18, 17,

            22, 21, 20, 23, 22, 20];
        var color2 = [0.0, 0.5, 1.0];
        addMesh(vert2, ind2, color2);
    }


// Draws a Cylinder
    var vert3 = [[0.0, 1.5, 0.0, 0.0, 1.0, 0.0, 0.625, 0.875]];
    k = 1;
    var step = 0.5/36; //how much to move in the texture when unrolling the can label
    var position = 0;

    // Top circle
    for (i = 0; i < 36; i++) {
        x = Math.sin(i/18.0*Math.PI);
        z = Math.cos(i/18.0*Math.PI)
        vert3[k++] = [x, 1.5, z, 0.0, 1.0, 0.0, 0.625 + z * 0.125, 0.875 + x* 0.125];
        //x y inverted to match assignment UV
    }

    // Top Center - unroll the texture
    for (i = 0; i <= 36; i++) {
        x = Math.sin(i/18.0*Math.PI);
        y = 1.5; //cilinder height
        z = Math.cos(i/18.0*Math.PI);
        norm = computeCilNorm(i)
        vert3[k++] = [x, y, z, norm[0], norm[1], norm[2], 0.5 + position, 0.75]; //slide through the 'side' from 0.5 to 1

        position = position + step;
    }

    // Bottom Center
    position = 0;
    for (i = 0; i <= 36; i++) {
        x = Math.sin(i/18.0*Math.PI);
        console.log(x);
        y = -1.5;
        z = Math.cos(i/18.0*Math.PI);
        norm = computeCilNorm(i)
        vert3[k++] = [x, y, z, norm[0], norm[1], norm[2], 0.5 + position, 0.5];
        position = position + step;
    }

    // Bottom Circle
    for (i = 0; i < 36; i++) {
        x = Math.sin(i/18.0*Math.PI);
        z = Math.cos(i/18.0*Math.PI)
        vert3[k++] = [x, -1.5, z, 0.0, -1.0, 0.0, 0.875 + x * 0.125, 0.875 + z * 0.125];
    }
    vert3[k++] = [0.0, -1.5, 0.0, 0.0, -1.0, 0.0, 0.875, 0.875];

    var ind3 = [];
    k = 0;
    // Top Circle
    for (i = 0; i < 36; i++) {
        ind3[k++] = 0;
        ind3[k++] = i + 1;
        ind3[k++] = (i + 1) % 36 + 1;
    }

    // Center rect
    for ( i = 0; i<36; i++) {
        ind3[k++] = i + 37*2
        ind3[k++] = (i + 1) + 37;
        ind3[k++] = i + 37;

        ind3[k++] = (i + 1) + 37;
        ind3[k++] = i + 37*2;
        ind3[k++] = (i + 1) + 37*2;
    }

    // Lower circle
    for(i = 0; i < 36; i++) {
        ind3[k++] = vert3.length -1;
        ind3[k++] = (i + 1) % 36 + 111;
        ind3[k++] = i + 111;
    }

    var color3 = [0.0, 1.0, 1.0];
    addMesh(vert3,ind3, color3);


}