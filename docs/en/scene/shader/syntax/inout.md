
# Shader Inputs and Outputs

Wallpaper Engine currently uses the old GLSL syntax based on **attribute**, **varying**, **uniform** and globals like **gl_FragColor**.

* An **attribute** is a hardcoded parameter that is provided by Wallpaper Engine per vertex.
* A varying can be freely defined by you. This is what the vertex shader outputs to the pixel shader and will be linearly interpolated between adjacent vertices of a primitive.
* Final global outputs like **gl_FragColor** are forwarded to the next stage to be immediately used for displaying the result of your shader.

## Vertex Shader
Vertex shaders for image/text layers currently only support the attributes **a_Position** and **a_TexCoord**.

### Input Attributes
* **a_Position** (`vec3`): The position in object space.
* **a_PositionVec4** (`vec4`)
* **a_Normal** (`vec3`): The normal in object space.
* **a_Tangent4** (`vec4`): The tangent in object space with bitangent sign in w.
* **a_TexCoord** (`vec2`): The basic texture coordinates.
* **a_TexCoordVec3** (`vec3`)
* **a_TexCoordVec4** (`vec4`)
* **a_TexCoordC1** (`vec2`)
* **a_TexCoordVec3C1** (`vec3`)
* **a_TexCoordVec4C1** (`vec4`)
* **a_TexCoordC2** (`vec2`)
* **a_TexCoordVec3C2** (`vec3`)
* **a_TexCoordVec4C2** (`vec4`)
* **a_TexCoordC3** (`vec2`)
* **a_TexCoordVec3C3** (`vec3`)
* **a_TexCoordVec4C3** (`vec4`)
* **a_TexCoordC4** (`vec2`)
* **a_TexCoordVec3C4** (`vec3`)
* **a_TexCoordVec4C4** (`vec4`)
* **a_TexCoordC5** (`vec2`)
* **a_TexCoordVec3C5** (`vec3`)
* **a_TexCoordVec4C5** (`vec4`)
* **a_Color** (`vec4`)

# Fragment Shader

## Outputs
* **gl_FragColor** (`vec4`): The final output color for a given pixel.
