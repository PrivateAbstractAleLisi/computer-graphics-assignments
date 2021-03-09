function move() {


	/* Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). 
	The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, 
	and then 15 degrees around the y-axis. */

	var T = utils.MakeTranslateMatrix(0, 1, -1);
	var TI = utils.invertMatrix(T)

	var RX = utils.MakeRotateZMatrix(45);  //around z-axis
	var RY = utils.MakeRotateYMatrix(15);	//around y-axis

	var R60 = utils.MakeRotateXMatrix(60);

	var RXI = utils.invertMatrix(RX);
	var RYI = utils.invertMatrix(RY);

	/* T * ALY * ALX * ROT 60 * ALXinv * ALYinv * T_INV */

	var R1 = 	utils.multiplyMatrices (
					utils.multiplyMatrices ( utils.multiplyMatrices (
						utils.multiplyMatrices( utils.multiplyMatrices ( utils.multiplyMatrices(T, RY), RX ) , R60 ), RXI ), RYI ), TI);








	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 

	//line equation is y = x, so rotate by 45 degrees so match x-axis and then use it to half the size

	S1 = utils.multiplyMatrices ( utils.multiplyMatrices ( RX, utils.MakeScaleNuMatrix(0.5, 1, 1) ) , RXI );

	




			   
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane

	//plane mirroring: It is obtained by assigning -1 to the scaling factor of the axis perpendicular to the plane (y)

	var t2 = utils.MakeTranslateMatrix(1, 1, 1);
	var t2_inv = utils.invertMatrix(t2);

	var MI = utils.MakeScaleNuMatrix(1, -1, 1);

	var RY15 = utils.MakeRotateXMatrix(15);
	var RY15inv = utils.invertMatrix(RY15);


	var S2 = utils.multiplyMatrices ( utils.multiplyMatrices ( 
				utils.multiplyMatrices( utils.multiplyMatrices ( t2, RY15  ), MI ), RY15inv), t2_inv  ) ;






			   
	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then 
	//Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	


	var rot4 = utils.invertMatrix(utils.MakeRotateYMatrix(30));
	var tra4 = utils.invertMatrix(utils.MakeTranslateMatrix(0,0,5));
	var sca4 = utils.invertMatrix(utils.MakeScaleMatrix(3))
	var  I1 = utils.multiplyMatrices( utils.multiplyMatrices(rot4, tra4), sca4 );

	return [R1, S1, S2, I1];
}

