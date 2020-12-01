
# common.h

This basic header contains some useful utilities and may be included in both fragment and vertex shaders.

## Constants
* **M_PI** 3.14159265359
* **M_PI_HALF** 1.57079632679
* **M_PI_2** 6.28318530718
* **SQRT_2** 1.41421356237
* **SQRT_3** 1.73205080756

## Functions
* **hsv2rgb** (vec3) -> vec3: Converts a HSV color to an RGB color. Both are normalized.
* **rgb2hsv** (vec3) -> vec3: Converts a RGB color to an HSV color. Both are normalized.
* **rotateVec2** (vec2, r) -> vec2: Rotates a directional vector by r radians.
* **greyscale** (vec3) -> float: Converts a color to a greyscale value.
