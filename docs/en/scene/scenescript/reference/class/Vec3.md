---
prev: ../../reference.md
---

# SceneScript Class Vec3

Utility class which holds a 3 dimensional value pair: `x`, `y` and `z`.

## Properties

### x: Number

Value of first component.

### y: Number

Value of second component.

### z: Number

Value of third component. 

## Constructors

### constructor(x: Number, y: Number, z: Number): Vec3

Constructor that sets x, y and z respectively.

### constructor(): Vec3

Empty constructor sets all components to 0.

### constructor(value: Number): Vec3

Sets x, y and z members to parameter value.

### constructor(x: Number, y: Number): Vec3

Constructor that sets x and y respectively and sets z to 0.

### constructor(value: String): Vec3

Will parse the first three numbers from the string and set x, y and z respectively.

### constructor(value: Vec2): Vec3

Will use x and y from value and set z to 0.

## Functions

### equals(other: Vec3): Boolean

Checks if one vector is equal (with epsilon) to another vector.

### length(): Number

Returns length of the vector.

### lengthSqr(): Number

Returns squared length of the vector. This is more efficient, so if you only need a binary comparison, use this.

### normalize(): Vec3

Normalizes the vector and returns the result as a new object.

### copy(): Vec3

Makes a copy.

### add(value: Number|Vec3): Vec3

Adds parameter to all three components and returns result as a new object.

### subtract(value: Number|Vec3): Vec3

Subtracts parameter to all three components and returns result as a new object.

### multiply(value: Number|Vec3): Vec3

Multiplies all three components with parameter and returns result as a new object.

### divide(value: Number|Vec3): Vec3

Divides all three components by parameter and returns result as a new object. Does not check for zero division.

### dot(value: Vec3): Number

Computes dot product with vector value.

### reflect(normal: Vec3): Vec3

Returns reflection vector along normal. Make sure that normal is normalized.

### mix(other: Vec3, amount: Number): Vec3

Interpolate between this vector and another vector of the same dimension. You can set the interpolation using the `amount` parameter, it accepts values between 0.00 and 1.00 where 1.00 represents the other vector. By setting it to 0.5, for example, you will interpolate halfway between this and the other vector.

### min(value: Vec3): Vec3

Return the smaller value per component of two vectors.

### max(value: Vec3): Vec3;

Return the larger value per component of two vectors.

### cross(value: Vec3): Vec3

Returns cross product between this and value as a new object.

### abs(): Vec3

Returns absolute values for each vector component.

### sign(): Vec3

Returns sign of each vector component.

### round(): Vec3

Rounds each vector component.

### floor(): Vec3

Returns floor value of each vector component.

### ceil(): Vec3

Returns ceil value of each vector component.

### toString(): String

Concatenates components with a space in-between so that it can also be parsed again. 