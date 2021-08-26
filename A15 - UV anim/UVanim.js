/*

receives as parameters a floating point value in the 0...1
 range that represents the current time. Each procedure should compute
  and return the time-dependent transform matrix for the UV coordinates.

 */

//Car on the road

//scale by 0.25 => multiply by 4 : 0-0.5 becomes 0-2.0

//(t,2,0): 2 is to reach the height of the road section, t is to shift the "window" on the texture in order to animate it
function Anim1(t) {
	var out = utils.multiplyMatrices(utils.MakeScaleMatrix(0.25), utils.MakeTranslateMatrix(t,2,0));
	return out;
}
//Bouncy code
function Anim2(t) {

	var out = utils.multiplyMatrices(utils.MakeScaleMatrix(0.25),
		//abs creates a bouncy function, like a triangular waveform
		utils.MakeTranslateMatrix(3, 3 - Math.abs(2*(2*t/2 - Math.floor(2*t/2+1/2))), 0));
	return out;
}

//Fan
function Anim3(t) {

	//rotation around an arbitrary axis
	//center of rotation is fixed by the maketranslatematrix
	var out = utils.multiplyMatrices(
		utils.multiplyMatrices(															//center of the fan picture .625, .875
			utils.multiplyMatrices(utils.MakeScaleMatrix(0.25),utils.MakeTranslateMatrix(2+ 0.5,3+ 0.5,0)
			), utils.MakeRotateZMatrix(360*t) //this creates rotation
		), utils.MakeTranslateMatrix(-0.5, -0.5, 0));
	return out;
}

//Burning flame
function Anim4(t) {
	var out = utils.multiplyMatrices(utils.MakeScaleMatrix(1.0/12.0),
																	//jump to the 'next' frame => discrete values
		utils.MakeTranslateMatrix(Math.floor((72*t)%12), 5 - Math.floor((6*t)%6), 0 ));  //Mod is used to "restart"
	return out;
}