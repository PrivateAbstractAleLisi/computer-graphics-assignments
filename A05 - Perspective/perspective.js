function tanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI / 180);
}


/**
creates a perspective projection matrix given
_param fov::  camera field of view (fov-y)
_param a:: aspect ratio 
_param f:: far plane
_param n:: near plane
**/
function makePerspective(fov, a, n, f) {

	var cotFOV =  1/(tanFromDegrees(fov/2));

	return 	   [cotFOV*(1/a),	0.0,		0.0,		     0.0,
			    0.0,		  cotFOV,		0.0,		     0.0,
			    0.0,		    0.0,		(f+n)/(n-f),	(2*f*n)/(n-f),
			    0.0,		    0.0,		-1,		          0];
}

function makePerspectiveLRTB(t, b, l, r, n, f) {

		return 	[2*n/(r-l),		0.0,		(r+l)/(r-l),     0.0,
			    0.0,		  2*n/(t-b),	(t+b)/(t-b),	 0.0,
			    0.0,		    0.0,		(f+n)/(n-f),	(2*f*n)/(n-f),
			    0.0,		    0.0,		-1,		          0];

}

function perspective() {
	// Make perspective projection, FoV-y = 70 deg, a = 16/9, n = 1, f = 101.
	var A1 =  makePerspective(70, 16/9, 1, 101);
			   
	// Make perspective projection, FoV-y = 105 deg, a = 16/9, n = 1, f = 101
	var A2 =  makePerspective(105, 16/9, 1, 101);
			   
	// Make perspective projection, FoV-y = 40 deg, a = 16/9, n = 1, f = 101
	var A3 =  makePerspective(40, 16/9, 1, 101);
	// Make perspective projection, FoV-y = 90 deg, a = 4/3, n = 1, f = 101. Note: since the aspect ratio is not correct, the image should appear to be deformed
	var O1 =  makePerspective(90, 4/3, 1, 101);

	// Make perspective projection, l = -1.2, r = 0, t = 0.3375, b = -0.3375, n = 1, f = 101. Note: due to the asimmetry of this projection, only the left part of the scene should be visible
	var O2 =  makePerspectiveLRTB(0.3375, -0.3375, -1.2, 0, 1, 101);

	return [A1, A2, A3, O1, O2];
}