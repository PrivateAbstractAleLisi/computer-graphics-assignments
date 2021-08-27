//If the coordinates system is y-up (as we have considered until now),
// and the object faces the positive z-axis, and rotations should be performed in the z, x and y order.

//FIRST CHILD AT 6, LAST CHILD AT 7

function drawPalm(i, S) {
	draw(i, utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
		utils.MakeRotateZMatrix(S[i][5])),
		utils.MakeRotateXMatrix(S[i][3])),
		utils.MakeRotateYMatrix(S[i][4])));
}

//FingerA is 'prima falange'
function drawFingerA(i, S) {

	draw(i, utils.multiplyMatrices(utils.multiplyMatrices(

		//ROOT
		utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[0][0], S[0][1], S[0][2]), //Root x y z
		utils.MakeRotateZMatrix(S[0][5])), //Root Rz
		utils.MakeRotateXMatrix(S[0][3])), //Root Rx
		utils.MakeRotateYMatrix(S[0][4])), //Root Ry

		//FIRST SON
		utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]), //x, y, z of the current node 'i'
		utils.MakeRotateZMatrix(S[i][5])), //Rz
		utils.MakeRotateXMatrix(S[i][3])), //Rx
		utils.MakeRotateYMatrix(S[i][4])))); //Ry
}

//FingerB is 'seconda falange'
function drawFingerB(i, S){

	//ROOT
	draw(i, utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[0][0], S[0][1], S[0][2]),
		utils.MakeRotateZMatrix(S[0][5])),
		utils.MakeRotateXMatrix(S[0][3])),
		utils.MakeRotateYMatrix(S[0][4])),

		//FINGER-A (FIRST SON)
		utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i-5][0], S[i-5][1], S[i-5][2]),
		utils.MakeRotateZMatrix(S[i-5][5])),
		utils.MakeRotateXMatrix(S[i-5][3])),
		utils.MakeRotateYMatrix(S[i-5][4])),

		//FINGER-B (SECOND SON)
		utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
		utils.MakeRotateZMatrix(S[i][5])),
		utils.MakeRotateXMatrix(S[i][3])),
		utils.MakeRotateYMatrix(S[i][4])))));
}

//FingerC is 'terza falange'
function drawFingerC(i, S) {
	draw(i, utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(

		//ROOT
		utils.MakeTranslateMatrix(S[0][0], S[0][1], S[0][2]),
		utils.MakeRotateZMatrix(S[0][5])),
		utils.MakeRotateXMatrix(S[0][3])),
		utils.MakeRotateYMatrix(S[0][4])),

		//FINGER-A
		utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
			utils.MakeTranslateMatrix(S[i-10][0], S[i-10][1], S[i-10][2]),
			utils.MakeRotateZMatrix(S[i-10][5])),
			utils.MakeRotateXMatrix(S[i-10][3])),
			utils.MakeRotateYMatrix(S[i-10][4])),

			//FINGER-B
			utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
				utils.MakeTranslateMatrix(S[i-5][0], S[i-5][1], S[i-5][2]),
				utils.MakeRotateZMatrix(S[i-5][5])),
				utils.MakeRotateXMatrix(S[i-5][3])),
				utils.MakeRotateYMatrix(S[i-5][4])),

				//FINGER-C
				utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
					utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
					utils.MakeRotateZMatrix(S[i][5])),
					utils.MakeRotateXMatrix(S[i][3])),
					utils.MakeRotateYMatrix(S[i][4]))))));
}


function drawSceneTree(S) {
	//for each node
	for(let node = 0; node < S.length; node++) {

		let child = S[node][6];
		let thumbA = S[0][7];


	//======= If current node is: ======


		//THUMB

		if (node === (thumbA)) { // the first child of palm (thumb-a)
			drawFingerA(node, S);
		}
		// THUMB B (child of thumb A)
		else if (node === S[thumbA][6]) { //the first child of thumb A, thumb a is 0,7
			drawFingerB(node, S);
		}

		//UPPER FINGERS
		else if (child !== -1) { //child of current node, if has one
			let child_1 = S[child][6];
			if (child_1 !== -1){ //second child of current node, if has one

				let child_2 = S[child_1][6]; //third child of current node, if has one

				//PALM
				if (child_2 !== -1){
					drawPalm(node, S); //palm has 3 children (upper fingers)
				}
				//FIRST SON (FINGER A)
				else {		//2 children
					drawFingerA(node, S);
				}
			}
				//SECOND SON (FINGER B)

			else {
				drawFingerB(node, S);
			}
		}

		//NO SONS - FINGER C of 3-part upper fingers
		else {
			drawFingerC(node, S);
		}
	}
}



