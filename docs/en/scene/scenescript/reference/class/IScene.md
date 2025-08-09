---
prev: ../../reference.md
---

# SceneScript Class IScene

You can access this interface through the global object `thisScene` anywhere in your SceneScript code to access properties and functions related to the currently loaded scene.

[[toc]]

## Properties

### bloom: Boolean

Turns the bloom effect on and off.

### bloomstrength: Number

Strength of the bloom effect.

### bloomthreshold: Number

Minimum brightness required to make bloom show up.

### clearenabled: Boolean

Whether the backbuffer will be cleared at the beginning of a frame.

### clearcolor: Vec3

The color to clear the backbuffer with.

### ambientcolor: Vec3

The ambient color in 3D.

### skylightcolor: Vec3

The lower ambient color in 3D.

### fov: Number

Field of view in 3D.

### nearz: Number

Near Z plane distance for 3D.

### farz: Number

Far Z plane distance for 3D.

### camerafade: Boolean

Whether the camera will show the fade effect when changing paths.

### camerashake: Boolean

Turns camera shake on or off.

### camerashakespeed: Number

Sets the base speed for the camera shake.

### camerashakeamplitude: Number

Sets the magnitude of the camera shake.

### camerashakeroughness: Number

Sets how rough the camera will shake.

### cameraparallax: Boolean

Turns the camera parallax effect on or off.

### cameraparallaxamount: Number

How strong the parallax will scale.

### cameraparallaxdelay: Number

How quickly or slowly the parallax effect will transition.

### cameraparallaxmouseinfluence: Number

How much the parallax effect is affected by the cursor position.

## Functions

### getLayer(name: String|Number): ILayer

Get a layer by index or custom name.

### getLayerCount(): Number

Get the total layer count.

### enumerateLayers(): ILayer[]

Get all layers in an array.

### destroyLayer(name: String|Number|ILayer): Boolean

Remove a layer by index, name or reference. The layer will actually be removed in a deferred manner so consider this when expecting scripts to stop or destroy on that layer.

### createLayer(configuration: String|Object|IAssetHandle): ILayer

Creates a new layer based on the input values and returns a reference to it.

There are two recommended ways to create a layer:

#### Supplying an asset handle

You can supply an [IAssetHandle](/en/scene/scenescript/reference/class/IAssetHandle) created by [engine.registerAsset()](/en/scene/scenescript/reference/class/IEngine.html#registerasset-file-string-iassethandle) as a parameter. This will create the appropriate layer type, especially useful for simple image layers or pre-configured particle systems.

#### Creating a layer object

You can create an object that includes all the features of the layer that you want to configure. If you are unsure what options exist, you can always look at any `scene.json` and find any existing layers there for reference.

The following example would be a dynamically-created `Text` layer. Wallpaper Engine identifies this as a text layer simply by the fact that the `text` object member exists.

To further exemplify the possibilities, we also load a custom font file via `registerAsset` and then supply it as a variable to the object:

```js
'use strict';

const customFont = engine.registerAsset("fonts/MyCustomFont.ttf");
let customTextLayer;

export function init() {
    const textLayerData = {
        "text": "This is a text layer!",
        "font": customFont,
        "color": "1.00000 0 0",
        "maxwidth": 500.0,
        "origin": "960 540 0",
        "padding": 10,
        "pointsize": 32.0,
        "scale": "1 1 1"
};
    customTextLayer = thisScene.createLayer(textLayerData);
}
```

### sortLayer(layer: String|Number|ILayer, index: Number): Boolean

Changes the display order of a layer.

### getLayerIndex(layer: String|ILayer): Number

Returns the current index of a layer in the scene graph.

### getInitialLayerConfig(layer: String|Number|ILayer): Object;

Get the initial configuration of an existing layer.

### getCameraTransforms(): CameraTransforms

Returns the current, static camera transforms. Do not use this while using a camera path!

### setCameraTransforms(cameraTransforms: CameraTransforms): void

Changes the current, static camera transforms. Do not use this while using a camera path!