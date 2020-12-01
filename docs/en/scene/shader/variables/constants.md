
# Engine Constants

A number of global variables exist that are predefined by Wallpaper Engine. All you need to do to use them is declare them at the top of the shader. You can use the **Snippets --> Add Constant** menu to declare them easily.

## General
* **g_Time** (`float`): Time the program has been running in seconds.
* **g_Daytime** (`float`): Current time of day where 0 is 0:00 and 1.0 is 23:59 o'clock.
* **g_PointerPosition** (`vec2`): Normalized cursor position in [0, 1] screenspace.
* **g_TexelSize** (`vec2`): X and Y size of a screen pixel i.e. on a 1080p monitor this is (`vec2`)(1/1920, 1/1080).
* **g_TexelSizeHalf** (`vec2`): Half X and Y size of a screen pixel i.e. on a 1080p monitor this is (`vec2`)(0.5/1920, 0.5/1080).
* **g_Alpha** (`float`): Generic alpha multiplier, should only be used for objects that set this value right before drawing, like the base image layer shader.
* **g_Color** (`vec3`): Generic color multiplier, should only be used for objects that set this value right before drawing, like the base image layer shader.


## View
* **g_EyePosition** (`vec3`): Position of camera in worldspace.
* **g_ViewForward** (`vec3`): Normalized forward direction in worldspace.
* **g_ViewRight** (`vec3`): Normalized right direction in worldspace.
* **g_ViewUp** (`vec3`): Normalized up direction in worldspace.
* **g_OrientationForward** (`vec3`): Object orientation forward in worldspace (for particles).
* **g_OrientationRight** (`vec3`): Object orientation right in worldspace (for particles).
* **g_OrientationUp** (`vec3`): Object orientation up in worldspace (for particles).
* **g_ModelMatrix** (`mat4x4`): Current model matrix.
* **g_ModelMatrixInverse** (`mat4x4`): Current inverse of model matrix.
* **g_ViewProjectionMatrix** (`mat4x4`): Premultiplied view projection matrix.
* **g_ModelViewProjectionMatrix** (`mat4x4`): Premultiplied model view projection matrix.
* **g_ModelViewProjectionMatrixInverse** (`mat4x4`): Premultiplied inverse of model view projection matrix.

## Texture
* **g_Texture0Resolution** (`vec4`): Contains information about the texture bound to sampler 0. XY are the physical size in pixels of the texture, while ZW are the ''mapped'' size (for textures padded with black to the next power of two, the mapped size is smaller than the actual size).
* **g_Texture0Rotation** (`vec4`): Current rotation for sampling, only for sprite sheets.
* **g_Texture0Translation** (`vec2`): Current translation for sampling, only for sprite sheets.

These parameters exist for 8 samplers, 0 until 7, just replace the 0 in the middle of each name.

## Audio
* **g_AudioSpectrum16Left[16]** (`float array`): Audio samples in positive range (not normalized). Left channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum16Right[16]** (`float array`): Audio samples in positive range (not normalized). Right channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum16Left[32]** (`float array`): Audio samples in positive range (not normalized). Left channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum16Right[32]** (`float array`): Audio samples in positive range (not normalized). Right channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum16Left[64]** (`float array`): Audio samples in positive range (not normalized). Left channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum16Right[64]** (`float array`): Audio samples in positive range (not normalized). Right channel. From low frequencies at 0 to high frequencies until the end of the array.

## Light
* **g_LightAmbientColor** (`vec3`): Constant lighting selected in editor for 3D scenes.
* **g_LightSkylightColor** (`vec3`): Constant lighting selected in editor for 3D scenes.
* **g_LightsColorRadius[4]** (`vec4`): Light data for 4 point lights in the scene, needs to be unpacked like in generic2.frag.
* **g_LightsPosition[4]** (`vec3`): Light positions for 4 point lights in the scene, see generic2.vert.
