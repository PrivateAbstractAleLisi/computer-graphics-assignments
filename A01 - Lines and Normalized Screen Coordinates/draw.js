function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are a few random lines, you will have to replace with your code
	//line(0.3, 0.3,-0.4,-0.4);
	//line(0.4,-0.4,-0.4, 0.4);

	/* HORIZONTAL */
	line(-0.5, 0.3, 0.3, 0.3);
	line(-0.5, -0.3, 0.3, -0.3);

	/* VERTICAL */
	line(-0.5, 0.3, -0.5, -0.3);

	/* CIRCLE */
	for(i = 0; i <= 64; i++) {
		//y = 1.6*Math.random() - 0.5;
		//line(0.4, y,-0.4, y);
	}

}
