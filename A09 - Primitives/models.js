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



	// Draws a filled pentacong (replace the vertices and primitive type)
	var vert3 = [

		[0,0,0], [0,2,0] ,  [2,0,0] , [1,-2,0], [-1, -2,0], [-2,0,0], [0,2,0]


	]
	addMesh(vert3, "F", [204/255, 255/255, 204/255]);
	
}

