
## common_vertex.h

This header contains utilities that may be used in vertex shaders only.

## Functions
* **BuildTangentSpace** (vec3 normal, vec4 signedTangent) -> mat3: Builds tangent space matrix from a normal vector and a tangent vector with a sign in w for the direction of the bitangent.
* **BuildTangentSpace** (mat3 modelTransform, vec3 normal, vec4 signedTangent) -> mat3: Builds world space tangent space matrix from a normal vector and a tangent vector with a sign in w for the direction of the bitangent.
