function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	/* HORIZONTAL */
	line(-0.5, 0.3, 0.3, 0.3);
	line(-0.5, -0.3, 0.3, -0.3);

	/* VERTICAL */
	line(-0.5, 0.3, -0.5, -0.3);


	/* CIRCLE - approx. 64  */
	for(i = 90; i > -90; i--) {

		
		sin = Math.sin(i * Math.PI / 180)
		cos =  Math.cos(i * Math.PI / 180)

		sin2 = Math.sin( (i-1) * Math.PI / 180)
		cos2 = Math.cos( (i-1) * Math.PI / 180)

		x = 0.3 
		y = 0 


		line(x + 0.3*cos, y + 0.3*sin, x + 0.3*cos2 , y + 0.3*sin2)

	}

}
