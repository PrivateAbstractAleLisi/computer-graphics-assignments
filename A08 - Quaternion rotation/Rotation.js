// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.

var ori = new Quaternion();  //keeps track of object orientation

const speed = 0.5;
function updateWorld(rvx, rvy, rvz) {

	// compute the rotation matrix, speed is used to fix the rotation speed (scaling the angles)
	var alpha = speed * (rvx / 180 * Math.PI);
	var beta = 	speed * (rvy / 180 * Math.PI);
	var gamma = speed * (rvz / 180 * Math.PI);

	//formula to convert a rotation into a quaternion cos(a/2) + sin(a/2) * [i*x, j*y, k*z]
	var dX = new Quaternion(Math.cos(alpha / 2), Math.sin(alpha / 2), 0, 0);
	var dY = new Quaternion(Math.cos(beta / 2), 0, Math.sin(beta / 2), 0);
	var dZ = new Quaternion(Math.cos(gamma / 2), 0, 0, Math.sin(gamma / 2));

	//mult quaternions like matrices in the right order R = raw(Ry) * pitch(Rx) * roll (Rz)
	var rot = dY.mul(dX).mul(dZ).mul(ori);

	//save current orientation
	ori = dY.mul(dX).mul(dZ).mul(ori);
	

	//generate matrix by converting the quaternion representation into a [16] array matrix representation
	return rot.toMatrix4();
	
}

