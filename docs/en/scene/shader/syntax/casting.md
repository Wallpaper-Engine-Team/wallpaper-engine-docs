
# Type Casting

Since shaders are translated into HLSL, it is recommended to use the following casting macros for construction and casting. For example, when you want to cast a 4x4 matrix into 3x3 or when you want to create a vec3 from a single float.

* **CAST2()**: This will call vec2(x) in GLSL and do (float2)x in HLSL.
* **CAST3()**: This will call vec3(x) in GLSL and do (float3)x in HLSL.
* **CAST4()**: This will call vec4(x) in GLSL and do (float4)x in HLSL.
* **CAST3X3()**: This will call mat3(x) in GLSL and do (float3x3)x in HLSL.
