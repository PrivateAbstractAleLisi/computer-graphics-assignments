/**
In actual applications, we are interested in generating a 2D view for a 
plane arbitrarily positioned in the space.
This is achieved adding extra transformations before the projection.

We can think the projection plane as a camera that looks at the scene from the center of projection.

**/


function makeLookInWest (x, y, z, aim) {

		var p1 = utils.multiplyMatrices(utils.MakeRotateYMatrix(-90), 
			     utils.MakeTranslateMatrix(-x, -y, -z));
		return utils.multiplyMatrices(utils.MakeRotateXMatrix(-aim), p1);

}

function makeLookInAngleRoll(x, y, z, aim, angle, roll) {

		var p1 = utils.multiplyMatrices(utils.MakeRotateYMatrix(-angle), 
			  	 utils.MakeTranslateMatrix(-x, -y, -z));

		var p2 = utils.multiplyMatrices(utils.MakeRotateXMatrix(-aim), 
			  	 p1);

		return utils.multiplyMatrices(utils.MakeRotateZMatrix(-roll), p2);


}

function makeLookAt(c, a, u) {


	var vz = utils.normalizeVector3([ c[0]-a[0], c[1]-a[1], c[2]-a[2]]);
	var vx = utils.normalizeVector3(utils.crossVector(u,vz));
	var vy = utils.crossVector(vz, vx);

	M_c =  	   [vx[0], 	vy[0], 	vz[0], 	c[0],
			   	vx[1], 	vy[1], 	vz[1], 	c[1], 
			   	vx[2], 	vy[2], 	vz[2], 	c[2],
			    0.0,  	0.0,   	0.0,  	1.0];

	return utils.invertMatrix(M_c);

}

function view() {

	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	var A1 =  makeLookInWest(5, 2.5, 0, -30);
			   
	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	var A2 =  makeLookInAngleRoll(0, -1, -5, 15, 170, 45);
			   
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
	var A3 =  makeLookAt([-4, 2, -4],[0,0.5,0.5],[0,1,0]);
			   
	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
		var A4 =  makeLookAt([2.570, 0, 0],[2.8,0,-1],[1,0,0]);



	return [A1, A2, A3, A4];
}