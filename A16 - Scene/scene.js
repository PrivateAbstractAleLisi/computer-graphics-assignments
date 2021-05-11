function drawSceneTree(S) {
	var i;
	for(i = 0; i < S.length; i++) {
		draw(i, utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
			 utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
			 utils.MakeRotateZMatrix(S[i][5])),
			 utils.MakeRotateXMatrix(S[i][3])),
			 utils.MakeRotateYMatrix(S[i][4])));
	}
}