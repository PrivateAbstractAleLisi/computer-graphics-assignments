// S[i][6] is the first child
// S[i][7] is the last child
// If only one child is present, they have the same value. S[0][6] = 1, S[0][7] = 5
function drawSceneTree(S) {
	var i;
	for(i = 0; i < S.length; i++) {
		let child = S[i][6];

		// First check for thumb
		if (i == S[0][7]) {
			// Prima falange pollice
			draw1to5(i, S);
		}
		else if (i == S[S[0][7]][6]) {
			// Seconda falnage pollice
			draw6to10(i, S);
		}

		// Check for other fingers
		else if (child != -1) {
			let child_1 = S[child][6];
			if (child_1 != -1){
				let child_2 = S[child_1][6];
				if (child_2 != -1){			// Se ha 3 figli
					// Palmo
					draw0(i, S);
				}
				else {						// Se ha 2 figli
					// Prima falange
					draw1to5(i, S);
				}
			}
			else {							// Se ha 1 figlio
				//Seconda falange
				draw6to10(i, S);
			}
		}
		else {								// Se non ha figli
			// Ultima falange
			draw11to14(i, S);
		}
	}
}

// S[i][0,1,2] are x,y,z coordinates
// S[i][3,4,5] are x,y,z rotations
function draw0(i, S) {
	draw(i, utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
		utils.MakeRotateZMatrix(S[i][5])),
		utils.MakeRotateXMatrix(S[i][3])),
		utils.MakeRotateYMatrix(S[i][4])));
}

function draw1to5(i, S) {
	draw(i, utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[0][0], S[0][1], S[0][2]),
		utils.MakeRotateZMatrix(S[0][5])),
		utils.MakeRotateXMatrix(S[0][3])),
		utils.MakeRotateYMatrix(S[0][4])), utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
		utils.MakeRotateZMatrix(S[i][5])),
		utils.MakeRotateXMatrix(S[i][3])),
		utils.MakeRotateYMatrix(S[i][4]))));
}

function draw6to10(i, S){
	draw(i, utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[0][0], S[0][1], S[0][2]),
		utils.MakeRotateZMatrix(S[0][5])),
		utils.MakeRotateXMatrix(S[0][3])),
		utils.MakeRotateYMatrix(S[0][4])), utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i-5][0], S[i-5][1], S[i-5][2]),
		utils.MakeRotateZMatrix(S[i-5][5])),
		utils.MakeRotateXMatrix(S[i-5][3])),
		utils.MakeRotateYMatrix(S[i-5][4])), utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
		utils.MakeRotateZMatrix(S[i][5])),
		utils.MakeRotateXMatrix(S[i][3])),
		utils.MakeRotateYMatrix(S[i][4])))));
}

function draw11to14(i, S) {
	draw(i, utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[0][0], S[0][1], S[0][2]),
		utils.MakeRotateZMatrix(S[0][5])),
		utils.MakeRotateXMatrix(S[0][3])),
		utils.MakeRotateYMatrix(S[0][4])), utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i-10][0], S[i-10][1], S[i-10][2]),
		utils.MakeRotateZMatrix(S[i-10][5])),
		utils.MakeRotateXMatrix(S[i-10][3])),
		utils.MakeRotateYMatrix(S[i-10][4])), utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i-5][0], S[i-5][1], S[i-5][2]),
		utils.MakeRotateZMatrix(S[i-5][5])),
		utils.MakeRotateXMatrix(S[i-5][3])),
		utils.MakeRotateYMatrix(S[i-5][4])), utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
		utils.MakeRotateZMatrix(S[i][5])),
		utils.MakeRotateXMatrix(S[i][3])),
		utils.MakeRotateYMatrix(S[i][4]))))));
}
