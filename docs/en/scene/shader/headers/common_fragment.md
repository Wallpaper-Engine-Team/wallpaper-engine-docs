
# common_fragment.h

This header contains utilities that may be used in fragment shaders only.

## Functions
* **DecompressNormal** (vec4) -> vec3: Decompresses a normal map that was compiled in DXT5n format. Internally, the alpha channel is being used to increase the precision of the normal vector.
* **DecompressNormalWithMask** (vec4) -> vec4: Decompresses a normal map that was compiled in DXT5n format with a low precision alpha mask. Internally, the alpha channel is being used to increase the precision of the normal vector.
* **ConvertSampleR8** (vec4) -> float: This samples a single channel 8bit texture where the alpha channel is used in Dx9 while the red channel is used in Dx10/11 and OpenGL.
* **ConvertTexture0Format** (vec4) -> vec4: Depending on the format bound to the texture on sampler 0, this will return a greyscale image with alpha channel for RG88 format, a white image with alpha channel for R8 and a fully colored image with alpha channel for RGBA8888 format. Useful if the user is expected to be able to bind any of those formats with priority on the usability of the alpha channel.
