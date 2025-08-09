---
prev: ../../reference.md
---

# SceneScript Class IEngine

You can access this interface at any point in your scripts via the `engine` global to retrieve general information about the system of the wallpaper user and the running wallpaper.

[[toc]]

## Properties

### screenResolution: Vec2

The size of the screen the wallpaper is displayed on.

### canvasSize: Vec2

The size of the wallpaper project defined in the editor. Only for 2D scenes.

### userProperties: Object

Access to the user properties and the values currently selected by the user. Color properties are converted to Vec3 automatically.

### timeOfDay: Number

The time of day in the range [0.00, 1.00] representing the 24h clock. This means that 00:00:00 is represented as 0.00 and 23:59:59 is represented by a value of 1.00.

### frametime: Number

Time it took to update the last frame. This property is useful as it allows you to create create animations with a normalized speed. If create any sort of animation with SceneScript, it will have a different speed for users with a different FPS limit unless you first normalize it with `engine.frametime`.

### runtime: Number

Total time in seconds that the wallpaper has been running.

::: warning Please Note
The runtime has a rollover to retain floating point precision. If you want to create a timer, consider using `setTimeout();` instead.
:::

## Constants

### AUDIO\_RESOLUTION\_16: Number

Use this as a parameter in `registerAudioBuffers()` to create an [AudioBuffers](/scene/scenescript/reference/class/AudioBuffers) object with **16** frequency bands.

### AUDIO\_RESOLUTION\_32: Number

Use this as a parameter in `registerAudioBuffers()` to create an [AudioBuffers](/scene/scenescript/reference/class/AudioBuffers) object with **32** frequency bands.

### AUDIO\_RESOLUTION\_64: Number

Use this as a parameter in `registerAudioBuffers()` to create an [AudioBuffers](/scene/scenescript/reference/class/AudioBuffers) object with **64** frequency bands.

## Functions

### isDesktopDevice(): Boolean

Returns `true` on the Wallpaper Engine PC app and `false` on mobile devices.

### isMobileDevice(): Boolean

Returns `true` on the Wallpaper Engine mobile app and `false` on PCs.

### isWallpaper(): Boolean

Returns `true` when the wallpaper is being used as a wallpaper (as opposed to being used as a screensaver).

### isScreensaver(): Boolean

Returns `true` when the wallpaper is being used as a screensaver (as opposed to being used as a wallpaper).

### isPortrait(): Boolean

Returns true if the screen uses a portrait resolution.

### isLandscape(): Boolean

Returns true if the screen uses a landscape resolution.

### isRunningInEditor(): Boolean

You can use this to check whether the script is currently running inside the editor or not.

### registerAudioBuffers(resolution: Number): AudioBuffers

Registers your script with the audio responsive system in Wallpaper Engine and get access to the current audio volume levels of the user. The `resolution` parameter is required and defines in how many parts the audio spectrum is subdivided. To conserve memory and performance, you should always stick to the lowest number that you actually need.

Valid values for the `resolution` parameter are `engine.AUDIO_RESOLUTION_16`, `engine.AUDIO_RESOLUTION_32` and `engine.AUDIO_RESOLUTION_64` which divide the audio spectrum into 16, 32 and 64 sections respectively.

Returns an [AudioBuffers](/scene/scenescript/reference/class/AudioBuffers) object that you can store to retrieve the audio volume levels in each rendered frame.

### registerAsset(file: String): IAssetHandle

If you create any layers dynamically with SceneScript using the [createLayer()](/en/scene/scenescript/reference/class/IScene.html#createlayer-configuration-string-object-iassethandle-ilayer) function, `registerAsset` is used to mark an asset as being used by your wallpaper. This is important for releasing a wallpaper to the Workshop, as Wallpaper Engine will otherwise not be able to determine that the asset is actually being used and it will not be included when publishing the wallpaper to the Steam Workshop.

You can use this function in the following use-cases:

1. **Image layers:** If you want to include an image layer, make sure to register the image layer config file which can be found in the `model` directory. Do not include any files from the `materials` directory, this is the wrong approach. **Please note:** Video textures are not compatible with this functionality.
2. **Particle Systems:** Include your particle system's `.json` config file from the `particles` directory of your project here. Custom materials from your particle config will also be automatically included, there is no need to register them separately.
3. **3D models:** Register the `.json` config file from the `models` directory here. In case you are only using a single `.mdl` file, you can also register just this one.
4. **Sounds:** Directly registers a sound file (`.mp3` or `.wav`) in the `sounds` directory.
5. **Fonts:** Directly registers a font file from the `fonts` directory. Can be used in dynamically-created text layers.

#### Example:

If you want to register a texture or any other asset, first make sure that it is properly placed in your project directory. You either need to create it in your current project and then delete the layer again or you copy-paste all the necessary files from another project.

In the case of textures, your entry point is the texture config file in the `models` directory. This file typically looks like this, with a path to the texture in the `materials`:

```json
{
	"autosize" : true,
	"material" : "materials/customtexture.json"
}
```

Reference the texture config file from `models` directory in the `registerAsset` call, do not register any of the actual files in the `materials` directory:

```js
let customTexture = engine.registerAsset('models/customtexture.json');
```

The return value is an [IAssetHandle](/en/scene/scenescript/reference/class/IAssetHandle) which you can use as a parameter in the [thisScene.createLayer()](/en/scene/scenescript/reference/class/IScene.html#createlayer-configuration-string-object-iassethandle-ilayer) call:

```js
let dynamicLayer = thisScene.createLayer(customTexture);
```

The return value of this chain is a new image layer that you can configure like any other layer.

::: warning Please note
Make sure to only use hard-coded strings for the `file` parameter. Using dynamic or concatenated strings will break the wallpaper on Android. For example:

**OK:**

```js
engine.registerAsset('somepath/somefile.abc');
```

**NOT OK:**

```js
engine.registerAsset('somepath/' + 'somefile.abc')
```
:::

### setTimeout(callback: Function, delay?: Number): Function

Starts a timeout callback in milliseconds. Returns a new callback that can be used to stop the timeout prematurely.

### setInterval(callback: Function, delay?: Number): Function

Starts a repeating interval callback in milliseconds. Returns a new callback that can be used to stop the interval.