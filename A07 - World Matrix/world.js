
/**
The camera however is oriented along the negative z-axis (and not the positive one as introduce here).
For this reason, Roll  and Pitch  works in the opposite way with respect to rho and beta
*/
function makeWorldMatrix(x, y, z, yaw, pitch, roll, scale) {

	//create all the matrices needed form the world matric
	var TR = utils.MakeTranslateMatrix(x, y, z);

	var Ry = utils.MakeRotateYMatrix(yaw);   //yaw
	var Rx = utils.MakeRotateXMatrix(pitch);   //pitch             
	var Rz = utils.MakeRotateZMatrix(roll);   //roll 

	var S  = utils.MakeScaleMatrix(scale);

	var res = utils.multiplyMatrices(Rz, S);
	res = utils.multiplyMatrices(Rx, res);
	res = utils.multiplyMatrices(Ry, res);  
	res = utils.multiplyMatrices(TR, res);

	return res;
}



function makeWorldMatrixVariableScale(x, y, z, yaw, pitch, roll, scaleX, scaleY, scaleZ) {

	//create all the matrices needed form the world matric
	var TR = utils.MakeTranslateMatrix(x, y, z);

	var Ry = utils.MakeRotateYMatrix(yaw);   //yaw
	var Rx = utils.MakeRotateXMatrix(pitch);   //pitch             
	var Rz = utils.MakeRotateZMatrix(roll);   //roll 

		var vS = utils.identityMatrix();
		vS[0]  = scaleX;
		vS[5]  = scaleY;
		vS[10] = scaleZ;

	//Rotation should then be performed in between scaling and translation.
	//scale - z - x - y - translate
	var res = utils.multiplyMatrices(vS, Rz);
	res = utils.multiplyMatrices(Rx, res);
	res = utils.multiplyMatrices(Ry, res);  
	res = utils.multiplyMatrices(TR, res);

	return res;

} 

function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	var A1 =  makeWorldMatrix(0,0,-3, 90, 0,0,1);
			   
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	var A2 =  makeWorldMatrix(0,2, 0, 0, 60,0,1/10);
			   
	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45
	var A3 =  makeWorldMatrix(0,0,0, 30, 0,45,1);
			   
	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider
	var A4 =  makeWorldMatrixVariableScale(2,0,2, 180, 0,0 , 2, 1, 1);

	// Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)
	var A5 =  makeWorldMatrixVariableScale(1, -1, 2.5, -30, 45, -15, 0.8, 0.75, 1.2);

	return [A1, A2, A3, A4, A5];
}