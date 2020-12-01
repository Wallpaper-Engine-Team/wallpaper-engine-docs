
# Preprocessor

Wallpaper Engine uses a custom preprocessor to cull unused code and introspect a shader before compilation. The preprocessor is not a fullfledged C preprocessor and is lacking, for example, string conversion and concatenation. Conditionals should however work with boolean and logic operators, except for #elif, which isn't supported.

## The following define directives are applied based on context
* **GLSL**: Shader is being compiled as GLSL.
* **HLSL**: Shader is being compiled as HLSL.
* **HLSL_SM40**: Shader is being compiled for shader model 4.
* **HLSL_GS40**: Current renderer supports shader model 4 geometry shaders.

## The following directives make it easier to write a shader that supports GLSL and HLSL
* **texSample2D** (sampler, vec2 uvs) -> vec4: Sample a simple 2D texture. First parameter is a sampler constant and the second parameter a vec2 texture coordinate.
* **texSample2DLod** (sampler, vec2 uvs, float lod) -> vec4: Sample a simple 2D texture. First parameter is a sampler constant, the second parameter a vec2 texture coordinate and the third parameter a float to designate which mip maps get sampled.
* **mix**: Mix is the GLSL name for lerp in HLSL and accepted for both in Wallpaper Engine. So you should use **mix** to make the shader fully compatible.
* **frac**: frac is the HLSL name for fract in GLSL. So you should use **frac** to make the shader fully compatible.
* **saturate**: saturate is the HLSL name for clamp(x, 0, 1) in GLSL.
* **atan2**: atan2 is the HLSL name for atan in GLSL. So you should use **atan2 ** to make the shader fully compatible.
* **ddx**: ddx is the HLSL name for dFdx in GLSL. So you should use **ddx** to make the shader fully compatible.
* **ddy**: ddy is the HLSL name for dFdy in GLSL. So you should use **ddy** to make the shader fully compatible.
