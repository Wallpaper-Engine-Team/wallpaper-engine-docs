---
prev: ../../reference.md
---

# SceneScript Class IEffectLayer

Base class for image and text layers.

## Properties

### size: Vec2

Resolution of the image layer in pixels. *Read-only.*

### perspective: Boolean

If set to `true`, the layer will use perspective rendering instead of flat rendering.

### solid: Boolean

If set to `true`, the layer will trigger [cursor events](/scene/scenescript/reference/event/cursor).

## Functions

### getEffect(name: String|Number): IEffect

Find a material effect by its name or index.

### getEffectCount(): Number

Get number of effects used by this image layer.

### transformAttachmentToTexture(attachmentLayer:String|Number|ILayer, attachmentName: String|Number): Mat3

Get a 2D transformation matrix in texture space of this layer for an attachment on any layer of the scene. Useful to project or center 2D effects on compose layers to attachments in the world on other layers.
