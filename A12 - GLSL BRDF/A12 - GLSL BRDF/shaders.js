function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color
//vec4 ambColor;		// material ambient color
//vec4 specularColor;		// specular color
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface
//vec3 eyedirVec;		// looking direction
//
//
// Lighr directions can be found into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution can be found intop
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material. No specular or emisssion.
var S1 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular. No ambient and emission.
var S2 = `

	vec4 specContrA = pow(dot(normalVec, normalize(lightDirA + eyedirVec)), SpecShine) * lightColorA * specularColor ;
	vec4 specContrB = pow(dot(normalVec, normalize(lightDirB + eyedirVec)), SpecShine) * lightColorB * specularColor;
	vec4 specContrC = pow(dot(normalVec, normalize(lightDirC + eyedirVec)), SpecShine) * lightColorC * specularColor;
	
	vec4 diffContrA = diffColor  * dot(lightDirA, normalVec) * lightColorA ;
	vec4 diffContrB = diffColor  * dot(lightDirB, normalVec) * lightColorB;
	vec4 diffContrC = diffColor  * dot(lightDirC, normalVec) * lightColorC;
	
	out_color = clamp( diffContrA + specContrA + diffContrB + specContrB + diffContrC + specContrC , 
					0.0, 1.0);
`;


// Ambient and Phong specular. No emssion and no diffuse.
var S3 = `

	vec4 ambientCo = ambientLight * ambColor;


	vec3 reflA = -reflect(lightDirA, normalVec);
	float LRA = max(dot(reflA, eyedirVec), 0.0);
	vec4 specularPhongA = specularColor * pow(LRA, SpecShine);

	vec3 reflB = -reflect(lightDirB, normalVec);
	float LRB = max(dot(reflB, eyedirVec), 0.0);
	vec4 specularPhongB = specularColor * pow(LRB, SpecShine);

	vec3 reflC = -reflect(lightDirC, normalVec);
	float LRC = max(dot(reflC, eyedirVec), 0.0);
	vec4 specularPhongC = specularColor * pow(LRC, SpecShine);


	vec4 phongSpecular = lightColorA * specularPhongA + lightColorB * specularPhongB + lightColorC * specularPhongC;

	out_color = clamp( ambientCo + phongSpecular , 
					0.0, 1.0);

`;

// Diffuse, ambient, emission and Phong specular.
var S4 = `

	// AMBIENT //

	vec4 ambientCo = ambientLight * ambColor; 


	// PHONG SPECULAR //
	vec3 reflA = -reflect(lightDirA, normalVec);
	float LRA = max(dot(reflA, eyedirVec), 0.0);
	vec4 specularPhongA = specularColor * pow(LRA, SpecShine);

	vec3 reflB = -reflect(lightDirB, normalVec);
	float LRB = max(dot(reflB, eyedirVec), 0.0);
	vec4 specularPhongB = specularColor * pow(LRB, SpecShine);

	vec3 reflC = -reflect(lightDirC, normalVec);
	float LRC = max(dot(reflC, eyedirVec), 0.0);
	vec4 specularPhongC = specularColor * pow(LRC, SpecShine);

	vec4 phongSpecular = lightColorA * specularPhongA + lightColorB * specularPhongB + lightColorC * specularPhongC;

	//DIFFUSE

	vec4 diffContrA = diffColor  * dot(lightDirA, normalVec) * lightColorA;
	vec4 diffContrB = diffColor  * dot(lightDirB, normalVec) * lightColorB;
	vec4 diffContrC = diffColor  * dot(lightDirC, normalVec) * lightColorC;

	vec4 diffuse = diffContrA + diffContrB + diffContrC;

	//with EMISSION (emit)

	out_color = clamp( ambientCo + phongSpecular + diffuse + emit, 
					0.0, 1.0);
`;

// Ambient, Toon diffuse and and Toon (Blinn based) specular. No emssion.
var S5 = `
	
	vec4 ambientCo = ambientLight * ambColor; 

	//float DToonTh;		// Threshold for diffuse in a toon shader
	//float SToonTh;		// Threshold for specular in a toon shader

	//DIFFUSE TOON

	vec4 diffContrA =   dot(lightDirA, normalVec)  > DToonTh ? lightColorA : vec4(0,0,0,0);
	vec4 diffContrB =   dot(lightDirB, normalVec)  > DToonTh ? lightColorB : vec4(0,0,0,0);
	vec4 diffContrC =   dot(lightDirC, normalVec)  > DToonTh ? lightColorC : vec4(0,0,0,0);
	

	//SPECULAR


	vec4 specContrA =  ((dot(normalVec, normalize(lightDirA + eyedirVec)) ) > SToonTh ?  lightColorA : vec4(0,0,0,0));
	vec4 specContrB =  ((dot(normalVec, normalize(lightDirB + eyedirVec)) ) > SToonTh ?  lightColorB : vec4(0,0,0,0));
	vec4 specContrC =  ((dot(normalVec, normalize(lightDirC + eyedirVec)) ) > SToonTh ?  lightColorC : vec4(0,0,0,0));

	out_color =  clamp(
	(ambientCo + diffColor * (diffContrA + diffContrB + diffContrC)
	+ specularColor * (specContrA + specContrB + specContrC) ), 0.0, 1.0);



`;

	return [S1, S2, S3, S4, S5];
}

