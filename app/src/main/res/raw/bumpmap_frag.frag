#ifdef GL_FRAGMENT_PRECISION_HIGH
   // Default precision
   precision highp float;
#else
   precision mediump float;
#endif

uniform vec4 fvAmbient;
uniform vec4 fvSpecular;
uniform vec4 fvDiffuse;
uniform float fSpecularPower;

uniform sampler2D baseMap;
uniform sampler2D bumpMap;

varying vec2 Texcoord;
varying vec3 ViewDirection;
varying vec3 LightDirection;

void main( void )
{
//   vec3  fvLightDirection = normalize( LightDirection );
//   vec3  fvNormal         = normalize( ( texture2D( bumpMap, Texcoord ).xyz * 2.0 ) - 1.0 );
//   float fNDotL           = dot( fvNormal, fvLightDirection );
//
//   vec3  fvReflection     = normalize( ( ( 2.0 * fvNormal ) * fNDotL ) - fvLightDirection );
//   vec3  fvViewDirection  = normalize( ViewDirection );
//   float fRDotV           = max( 0.0, dot( fvReflection, fvViewDirection ) );
//
//   vec4  fvBaseColor      = texture2D( baseMap, Texcoord );
//
//   vec4  fvTotalAmbient   = fvAmbient * fvBaseColor;
//   vec4  fvTotalDiffuse   = fvDiffuse * fNDotL * fvBaseColor;
//   vec4  fvTotalSpecular  = fvSpecular * ( pow( fRDotV, fSpecularPower ) );
//
//   gl_FragColor = ( fvTotalAmbient + fvTotalDiffuse + fvTotalSpecular );
//
}
