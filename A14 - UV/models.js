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


    /* Draws a Cylinder --- To do for the assignment
    //upper and lower centers
    var vert3 = [[0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.625, 0.875]];
    vert3[145] = [0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.875,0.875];

    {
        for (i = 0; i < 36; i++) {

            const step = Math.PI * 16.0 * i / 180.0;
            //upper ring

            let radius = 0.75-0.625
            let u = 0.625 + (radius)*Math.cos(step)
            let v = 0.875 + (radius)*Math.sin(step)

            vert3[i + 1] = [Math.sin(step), 1.0, Math.cos(step), 0.0, 1.0, 0.0, u, v];

            //upper ring - horizontal normals (perpendicular to the last ones)
            let u_lin = 1 -  0.5*i/35.0
            let u_lin2 = 0.5 +  0.5*i/35.0

            vert3[i + 37] = [Math.sin(step), 1.0, Math.cos(step), Math.sin(step), 0.0, Math.cos(step), u_lin2, 0.75];


            let u_low = 0.875 + (radius)*Math.cos(step)
            let v_low = 0.875 + (radius)*Math.sin(step)

            //lower ring, same
            vert3[i + 73] = [Math.sin(step), -1.0, Math.cos(step), Math.sin(step), 0.0, Math.cos(step), u_lin2, 0.5];

            vert3[i + 109] = [Math.sin(step), -1.0, Math.cos(step), 0.0, -1.0, 0.0, u_low, v_low];
        }


        ////// INDICES ////////
        var ind3 = [];

        j = 0;
        for (i = 0; i < 36; i++) { //triangle fan for the upper circle
            ind3[j++] = 0;
            ind3[j++] = i + 1;
            ind3[j++] = (i + 1) % 36 + 1;
        }

        for (i = 0; i < 36; i++) { //triangle fan for the lower circle
            ind3[j++] = 145;
            ind3[j++] = (i + 1) % 36 + 109;
            ind3[j++] = i + 109;
        }

        for (i = 0; i < 36; i++) { //body
            ind3[j++] = i + 73;
            ind3[j++] = (i + 1) % 36 + 37;
            ind3[j++] = i + 37;

            ind3[j++] = (i + 1) % 36 + 37;
            ind3[j++] = i + 73;
            ind3[j++] = (i + 1) % 36 + 73;
        }
        let color3 = [1.0, 0.45, 0.7];
        addMesh(vert3, ind3, color3);
    } */

    // Draws a Cylinder --- Already done, just for inspiration
    ///// Creates vertices
    var vert3 = [[0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.625, 0.875]];
    for(i = 0; i < 36; i++) {

        let step = i*10.0/180.0*Math.PI;
        let radius = 0.75-0.625
        let u = 0.625 + (radius)*Math.cos(step)
        let v = 0.875 + (radius)*Math.sin(step)
        let u_low = 0.875 + (radius)*Math.cos(step)
        let v_low = 0.875 + (radius)*Math.sin(step)
        let u_lin2 = 0.5 +  0.5*i/35.0

        vert3[i+1] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI), 0.0, 1.0, 0.0, u, v];
        vert3[i+37] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI), Math.sin(i*10.0/180.0*Math.PI), 0.0, Math.cos(i*10.0/180.0*Math.PI), u_lin2, 0.75];
        vert3[i+73] = [Math.sin(i*10.0/180.0*Math.PI),-1.0, Math.cos(i*10.0/180.0*Math.PI), Math.sin(i*10.0/180.0*Math.PI), 0.0, Math.cos(i*10.0/180.0*Math.PI), u_lin2, 0.5];
        vert3[i+109] = [Math.sin(i*10.0/180.0*Math.PI),-1.0, Math.cos(i*10.0/180.0*Math.PI), 0.0, -1.0, 0.0, u_low, v_low];

    }
    vert3[145] = [0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.875, 0.875];
    ////// Creates indices
    var ind3 = [];
    //////// Upper part
    j = 0;
    for(i = 0; i < 36; i++) {
        ind3[j++] = 0;
        ind3[j++] = i + 1;
        ind3[j++] = (i + 1) % 36 + 1;
    }
    //////// Lower part
    for(i = 0; i < 36; i++) {
        ind3[j++] = 145;
        ind3[j++] = (i + 1) % 36 + 109;
        ind3[j++] = i + 109;
    }
    //////// Mid part
    for(i = 0; i < 36; i++) {
        ind3[j++] = i + 73;
        ind3[j++] = (i + 1) % 36 + 37;
        ind3[j++] = i + 37;

        ind3[j++] = (i + 1) % 36 + 37;
        ind3[j++] = i + 73;
        ind3[j++] = (i + 1) % 36 + 73;
    }
    var color3 = [1.0, 0.0, 1.0];
    addMesh(vert3,ind3, color3);


}