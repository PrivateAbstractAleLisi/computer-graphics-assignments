function degToRad(angle) {
	return angle * 180 / Math.PI;
}

function axonometry() {

			
	//recurring matrices and variables

	var a = 16.0/9.0;
	var w = 50.0;
	var n = 1;
	var f = 101;

	var proj = [	1/w,			0.0,		0.0,				0.0,
			   		0.0,			a/w,		0.0,				0.0,
			   		0.0,			0.0,		-2/(f+n),		-((f+n)/(f-n)),
			   		0.0,			0.0,		0.0,				1.0];



/*
	1. Isometric projections are obtained by applying a rotation of ±45o around the y-axis, 
	followed by a rotation of ±35.26o around the x-axis, before applying the parallel projection previously seen.
	Note that in this case the projection matrix must be specified with the half-width and the aspect ratio, since 
	the border of the box shown on screen are no longer oriented along the main axis.
*/
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.

	var rot45 =	utils.MakeRotateYMatrix(45);
	var rot3526 = utils.MakeRotateXMatrix(35.26);

	var A1 = utils.multiplyMatrices (utils.multiplyMatrices(proj, rot3526), rot45);
			   





/*	//this time mid matrix will make a rotation of an arbitrary angle alpha
*/
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	var A2 = utils.multiplyMatrices (utils.multiplyMatrices(proj, utils.MakeRotateXMatrix(20)), rot45);
	






/*	//all angles alpha, beta ar arbitrary
*/			   
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	var A3 = utils.multiplyMatrices (utils.multiplyMatrices(proj, utils.MakeRotateXMatrix(-30)), utils.MakeRotateYMatrix(30));
			   




	//I'll create the 2 shear matrix for these last two projections

	var sh1 = utils.MakeShearZMatrix(-Math.cos(utils.degToRad(45)), -Math.sin(utils.degToRad(45)));

	var sh2 =  [1,		0.0,		-0.5*Math.cos(degToRad(60)),		0.0,
			   0.0,		1,			-0.5*Math.sin(degToRad(60)),		0.0,
			   0.0,		0.0,		1,						0.0,
			   0.0,		0.0,		0.0,					1.0];


	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	var O1 =  utils.multiplyMatrices(proj, sh1);
	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	var O2 =  utils.multiplyMatrices(proj, sh2);

	return [A1, A2, A3, O1, O2];
}