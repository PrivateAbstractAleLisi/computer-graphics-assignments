function crossProduct(av, bv) {

	res = [

	  av[1] * bv[2] - av[2] * bv[1],
      av[2] * bv[0] - av[0] * bv[2],
      av[0] * bv[1] - av[1] * bv[0]

	]

    return res
    
  }

 function normalizeVector(vec) {

 	magnitude = Math.sqrt(Math.pow(vec[0],2 ) + Math.pow(vec[1],2 ) + Math.pow(vec[2],2 ))
 	return [ (vec[0]) / magnitude, Math.abs(vec[1])/magnitude, (vec[2])/magnitude]
 }

//from x in a,b to y in c,d
function mapToRange(X, A, B, C, D) {
    return (X - A) / (B - A) * (D - C) + C;
}

function toTris(vertices, granularity) {
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

	//===========================================================================//
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0], [-1.0,-1.0,1.0, 0.0,-1.0,0.0],
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, ind1, color1);
	

	//===========================================================================//

	// Draws a cube -- To do for the assignment.    //PLANE:
	var vert2 = 	[[-1.0,-1.0,0.0, 0.0, 0.0,1.0], //Z=0
	 				[1.0,-1.0,0.0, 0.0, 0.0,1.0],   
	 			 	[1.0,1.0,0.0, 0.0, 0.0,1.0], 
	  				[-1.0,1.0,0.0, 0.0, 0.0,1.0],    // 3

	  				[-1.0,	-1.0,	0.0, 0.0, -1.0,	0.0], //Y=-1   // 4
	 				[1.0,	-1.0,	0.0, 0.0, -1.0,	0.0],
	 			 	[-1.0,	-1.0,	-2.0, 0.0, -1.0,	0.0], 
	  				[1.0,	-1.0,	-2.0, 0.0, -1.0,	0.0], 	// 7

	  				[-1.0,	1.0,	0.0, 0.0, 1.0,	0.0], //Y=+1   //8
	 				[1.0,	1.0,	0.0, 0.0, 1.0,	0.0],
	 			 	[-1.0,	1.0,	-2.0, 0.0, 1.0,	0.0],  
	  				[1.0,	1.0,	-2.0, 0.0, 1.0,	0.0],   // 11

	  				[-1.0,	1.0,	0.0, 	-1.0, 0.0,	0.0], //Y=-1   //12
	 				[-1.0,	-1.0,	0.0, 	-1.0, 0.0,	0.0],
	 			 	[-1.0,	1.0,	-2.0, 	-1.0, 0.0,	0.0], 
	  				[-1.0,	-1.0,	-2.0,   -1.0, 0.0,	0.0],    //15

	  				[1.0,	1.0,	0.0, 	1.0, 0.0,	0.0], //Y=-1    //16
	 				[1.0,	-1.0,	0.0, 	1.0, 0.0,	0.0],
	 			 	[1.0,	1.0,	-2.0, 	1.0, 0.0,	0.0], 
	  				[1.0,	-1.0,	-2.0,   1.0, 0.0,	0.0],     //19

	  				[-1.0,-1.0,-2.0, 0.0, 0.0,-1.0], //Z=0
	 				[1.0,-1.0,-2.0, 0.0, 0.0,-1.0],   
	 			 	[1.0,1.0,-2.0, 0.0, 0.0,-1.0], 
	  				[-1.0,1.0,-2.0, 0.0, 0.0,-1.0] 


	  		];
	var ind2 = [0, 1, 2,  0, 2, 3,	

				7,5,4, 4, 6, 7, 

				8,9,10,   11,10,9,

				14, 13, 12, 13, 14, 15,

				 16, 17, 18,  19, 18, 17,

				 22, 21, 20,  23, 22, 20];
	var color2 = [0.0, 1.0, 1.0];

	addMesh(vert2, ind2, color2);
	




	//============================== SIN COS FUNCTION ===============================//


	let granularity = 15;
	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.
	var vert3 = [];

    var pos = 0;
    var tri = 0;

    for (i = 0; i < granularity; i++) {
        for (j = 0; j < granularity; j++) {

            var x = mapToRange(i, 0, granularity, -3, 3);
            var z = mapToRange(j, 0, granularity, -3, 3);

			var y = Math.sin((x)) * Math.cos((z))

			let Fx = Math.cos(x) * Math.cos(z)
			let Fz = Math.sin(x) * (-Math.sin(z))
			let Fy = -1

			let norma = normalizeVector([-Fx, -Fy, -Fz])
			vert3[pos] = [x, y, z, norma[0],norma[1],norma[2] ];
            pos = pos + 1;
        }
    }
	
	var ind3 = toTris(vert3, granularity);
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);





	// ============================================================================ //


	// Draws a Cylinder --- To do for the assignment

	//upper and lower centers
	var vert4 = [[0.0, 1.0, 0.0, 0.0, 1.0, 0.0]];
	vert4[145] = [0.0, -1.0, 0.0, 0.0, -1.0, 0.0];

	{
		for (i = 0; i < 36; i++) {

			const step = Math.PI * 16.0 * i / 180.0;
			//upper ring
			vert4[i + 1] = [Math.sin(step), 1.0, Math.cos(step), 0.0, 1.0, 0.0];

			//upper ring - horizontal normals (perpendicular to the last ones)
			vert4[i + 37] = [Math.sin(step), 1.0, Math.cos(step), Math.sin(step), 0.0, Math.cos(step)];

			vert4[i + 73] = [Math.sin(step), -1.0, Math.cos(step), Math.sin(step), 0.0, Math.cos(step)];
			vert4[i + 109] = [Math.sin(step), -1.0, Math.cos(step), 0.0, -1.0, 0.0];
		}


		////// INDICES ////////
		var ind4 = [];

		j = 0;
		for (i = 0; i < 36; i++) { //triangle fan for the upper circle
			ind4[j++] = 0;
			ind4[j++] = i + 1;
			ind4[j++] = (i + 1) % 36 + 1;
		}

		for (i = 0; i < 36; i++) { //triangle fan for the lower circle
			ind4[j++] = 145;
			ind4[j++] = (i + 1) % 36 + 109;
			ind4[j++] = i + 109;
		}

		for (i = 0; i < 36; i++) { //body
			ind4[j++] = i + 73;
			ind4[j++] = (i + 1) % 36 + 37;
			ind4[j++] = i + 37;

			ind4[j++] = (i + 1) % 36 + 37;
			ind4[j++] = i + 73;
			ind4[j++] = (i + 1) % 36 + 73;
		}
		let color4 = [1.0, 0.45, 0.7];
		addMesh(vert4, ind4, color4);
	}

	// Draws a Sphere --- To do for the assignment.
	var vert5 = [[-1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,1.0,0.0, 0.0, 0.0,1.0], [-1.0,1.0,0.0, 0.0, 0.0,1.0]];
	var ind5 = [0, 1, 2,  0, 2, 3];
	var color5 = [1.0, 0.0, 0.0];
	addMesh(vert5, ind5, color5);

}

