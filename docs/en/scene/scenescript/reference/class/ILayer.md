---
prev: ../../reference.md
---

# SceneScript Class ILayer

You can access this interface through the global object `thisLayer` anywhere in your SceneScript code to interact with the current layer.

## Properties

### origin: Vec3

Position of the layer.

### angles: Vec3

Orientation of the layer in degrees.

### scale: Vec3

Relative size of the layer.

### name: String

Custom name set in the editor.

### visible: Boolean

Whether the layer is currently visible.

### parallaxDepth: Vec2

The parallax scale for the X and Y axis.

## Functions

### getAnimation(name?: String): IAnimation

Get an animation object by name. Leave empty to get the animation object bound to the current property.

### rotateObjectSpace(angles: Vec3)

Rotate the layer around its current object axes.

### setParent(parent: String|Number|ILayer, adjustTransforms?: Boolean)

Changes the parent of the layer. Pass undefined for the parent to remove the parent. Enable adjustTransforms if you want the layer to stay in place, this will update the local transforms to reflect the old position relative to the new parent.

### setParent(parent: String|Number|ILayer, attachment: String|Number, adjustTransform?: Boolean)

Changes the parent of the layer. Pass undefined for the parent to remove the parent. Enable adjustTransforms if you want the layer to stay in place, this will update the local transforms to reflect the old position relative to the new parent. Use attachment to specify a puppet attachment point to attach to.

### getParent(): ILayer

Returns the current parent layer or undefined if the layer is not parented.

### getAttachmentIndex(name: String): Number

Get index of an attachment by name.

### getAttachmentMatrix(attachment: String|Number): Mat4

Get world transform matrix of an attachment.

### getAttachmentOrigin(attachment: String|Number): Vec3

Get world origin of an attachment.

### getAttachmentAngles(attachment: String|Number): Vec3

Get world angles of an attachment.