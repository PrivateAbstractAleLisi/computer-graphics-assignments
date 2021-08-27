//to be returned: the transform matrix + interpolation
//The procedure receives 13 parameters defining the position, the rotation in the initial and final frame,
// and the linear interpolation factor. Parameters tx1, ty1 and tz1 contain the translation displacements
// of the first frame (respectively tx2, ty2 and tz2 for the last frame). Rotations are defined using Euler angles,
// and contained in rx1, ry1, rz1, rx2, ry2 and rz2. Last parameter a is the interpolation value, 0 <= alpha <= 1, used for the interpolation.

//@params
//TX,RX (1) are initial position and rotation
//TX,RX (2) are final position and rotation
//a is interpolation coefficient € [0,1]
function InterpMat(
				tx1, ty1, tz1, rx1, ry1, rz1,
			    tx2, ty2, tz2, rx2, ry2, rz2,
			    a) {

	//Lerp of position (3D Vector)
	const LERP = lerp3D(tx1, tx2, ty1, ty2, tz1, tz2, a);

	//Quaternions
	let quaternionIni = Quaternion.fromEuler(utils.degToRad(rz1), utils.degToRad(rx1), utils.degToRad(ry1), 'ZXY');
	let quaternionFin = Quaternion.fromEuler(utils.degToRad(rz2), utils.degToRad(rx2), utils.degToRad(ry2), 'ZXY');

	//Final output
	let quaternionSlerp = quaternionIni.slerp(quaternionFin)(a).toMatrix4(); 	//Full slerp: q_in and q_fin ,  interpolation coefficient 'a'
	return utils.multiplyMatrices(LERP, quaternionSlerp);

}

function lerp1D(a,b,lf) {
	return (1-lf)*a+ lf*b
}
function lerp3D(x1, x2, y1, y2, z1, z2, lf) {
	return utils.MakeTranslateMatrix(lerp1D(x1, x2, lf), lerp1D(y1, y2, lf), lerp1D(z1, z2, lf));
}
