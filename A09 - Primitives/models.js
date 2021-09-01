/******

addMesh(vertexCoordinates[][3], string meshLetter, RGBColor[3])

****/



function buildGeometry() {
	
	
	// Draws the outline of letter F (replace the vertices and primitive type)
	var vert1 = [

	[0,0,0],
	[1,0,0],

	[1,0,0],
	[1,1,0],

	[1,1,0],
	[1,2,0],

	[1,2,0],
	[2,2,0],

	[2,2,0],
	[2,3,0],

	[2,3,0],
	[1,3,0],

	[1,3,0],
	[1,4,0],

	[1,4,0],
	[2,4,0],

	[2,4,0],
	[2,5,0],

	[2,5,0],
	[0,5,0],

	[0,5,0],
	[0,0,0]


	]

	addMesh(vert1, "L", [0.0, 0.0, 1]);


	// Draws a filled S-shaped pattern (replace the vertices and primitive type)




	var vert2 = 

			[

			[3,5 ,0], [3,4,0], [2,5,0], [2,4,0], [1,5,0], [0,4,0],
			[1,4,0], [0,3,0], [1,3,0], [1,2,0], [2,3,0], [2,2,0],
			[3,2,0], [2,1,0], [3,1,0], [2,0,0], [0,1,0], [0,0,0]


			]


	addMesh(vert2, "S", [0.0, 0.0, 1.0]);



	// Draws a filled pentagon (replace the vertices and primitive type)
	let c1 = 4*(Math.sqrt(5)-1)/4;
	let c2 = 4*(Math.sqrt(5)+1)/4;
	let s1 = 4*(Math.sqrt(10+2*Math.sqrt(5)))/4;
	let s2 = 4*(Math.sqrt(10-2*Math.sqrt(5)))/4;

	var vert3 = [[0, 0, 1.0], [0.0, 4.0, 1.0], [s1, c1, 1.0], [s2, -c2, 1.0], [-s2, -c2, 1.0], [-s1, c1, 1.0], [0, 4.0, 1.0]];

	addMesh(vert3, "F", [0.0, 1.0, 0.8]);
	
}

