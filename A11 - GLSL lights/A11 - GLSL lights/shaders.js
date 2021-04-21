function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//vec3  Pos;		// Position of first (or single) light
//vec3  Dir;		// Direction of first (or single) light
//float ConeOut;	// Outer cone (in degree) of the light (if spot)
//float ConeIn;		// Inner cone (in percentage of the outher cone) of the light (if spot)
//float Decay;		// Decay factor (0, 1 or 2)
//float Target;		// Target distance
//vec4  lightColor;	// color of the first light
//		
//
//vec4 ambientLightColor;		// Ambient light color. For hemispheric, this is the color on the top
//vec4 ambientLightLowColor;	// For hemispheric ambient, this is the bottom color
//vec3 ADir;					// For hemispheric ambient, this is the up direction
//vec4 SHconstColor;		// For spherical harmonics, constant term
//vec4 SHDeltaLxColor;		// For spherical harmonics, DeltaLx color
//vec4 SHDeltaLyColor;		// For spherical harmonics, DeltaLy color
//vec4 SHDeltaLzColor;		// For spherical harmonics, DeltaLz color
//
//vec3 normalVec;				// direction of the normal vector to the surface
//
//
// Final direction and colors are returned into:
//vec3 OlightDir;
//
//and intensity is returned into:
//
//vec4 OlightColor;
//
// Ambient light contribution is returned into
//
// vec4 ambientColor;

// Single directional light, constant ambient
var S1 = `
	OlightDir = Dir;
	OlightColor = lightColor;
	
	ambientColor = ambientLightColor;
`;

// Single point light without decay
var S2 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor;
`;

// Single spot light (without decay), constant ambient
var S3 = `
	OlightDir =  normalize(Pos - fs_pos); //light direction is computed as the same as for point light
	ambientColor = ambientLightColor;
	OlightColor = lightColor * clamp( 
	
	(   (dot(normalize(Pos - fs_pos), Dir)   - cos(radians(ConeOut/2.0)) ) / (  cos(radians(ConeIn/2.0))  - cos(radians(ConeOut/2.0))  )
	
	)
	
	, 0.0, 1.0);


`;

// Single point light with decay
var S4 = `
		OlightDir = normalize(Pos - fs_pos);
		OlightColor = pow( ( (Target) / length(Pos - fs_pos) ) , Decay) * lightColor;
`;

// Single spot light (with decay)
var S5 = `

	OlightDir =  normalize(Pos - fs_pos); //light direction is computed as the same as for point light
	ambientColor = ambientLightColor;
	OlightColor = lightColor * pow( ( (Target) / length(Pos - fs_pos) ) , Decay) * clamp( 
	
	(   (dot(normalize(Pos - fs_pos), Dir)   - cos(radians(ConeOut/2.0)) ) / (  cos(radians(ConeIn/2.0))  - cos(radians(ConeOut/2.0))  )
	
	)
	
	, 0.0, 1.0);
`;

// Single point light, hemispheric ambient 
var S6 = `
	OlightDir = normalize(Pos - fs_pos);
	OlightColor = lightColor;
    ambientColor = (((dot(ADir,normalVec)+1.0)/2.0 * ambientLightColor) + ((1.0-dot(ADir,normalVec))/2.0 * ambientLightLowColor));
`;

// Single spot light, spherical harmonics ambient
var S7 = `
		OlightDir =  normalize(Pos - fs_pos); //light direction is computed as the same as for point light

		OlightColor = lightColor * clamp( 
	
		(   (dot(normalize(Pos - fs_pos), Dir)   - cos(radians(ConeOut/2.0)) ) / (  cos(radians(ConeIn/2.0))  - cos(radians(ConeOut/2.0))  )
	
		)
	
	, 0.0, 1.0);
	
	
	ambientColor = SHconstColor + 
									normalVec.x * SHDeltaLxColor +
									normalVec.y * SHDeltaLyColor +
									normalVec.z * SHDeltaLzColor ;
`;

//vec4 SHconstColor;		// For spherical harmonics, constant term
//vec4 SHDeltaLxColor;		// For spherical harmonics, DeltaLx color
//vec4 SHDeltaLyColor;		// For spherical harmonics, DeltaLy color
//vec4 SHDeltaLzColor;		// For spherical harmonics, DeltaLz color
//
//vec3 normalVec;				// direction of the normal vector to the surface
	return [S1, S2, S3, S4, S5, S6, S7];
}

