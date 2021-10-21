# SceneScript Reference

SceneScript is follows the ECMAScript 2018 specification, so you can utilize all functionalities from ECMAScript that you would also find in similar languages such as *JavaScript*. This is very useful as you can make use of various helpful classes. For example, `Date` allows you to access the current date and time, `Math` allows you to access various mathematical utility functions.

This page only covers all additions that SceneScript adds to make working with wallpapers possible.

## Globals

SceneScript introduces a handful of globals which you can access at any point in your code.

| Global        | Description   |
|---------------|---------------|
| [engine](/scene/scenescript/reference/class/IEngine) | Access to general features of the application. `IEngine` class. |
| [input](/scene/scenescript/reference/class/IInput) | Input related data, mainly the mouse cursor. `IInput` class.|
| [thisScene](/scene/scenescript/reference/class/IScene) | The currently loaded scene wallpaper. `IScene` class |
| [thisLayer](/scene/scenescript/reference/class/ILayer) | The layer this script has been loaded on. `ILayer` class. |
| [thisObject](/scene/scenescript/reference/class/IThisPropertyObject) | The object this script belongs to. `IThisPropertyObject` class. |
| [console](/scene/scenescript/reference/class/IConsole) | Access the console log for debugging purposes. `IConsole` class. |
| [shared](/scene/scenescript/reference/class/Shared) | Empty by default, allows you to share data between multiple scripts. `Shared` class. |

## Events

SceneScript uses an event system that allows you to run specific code whenever certain events take place. Most notably, the `update` event is most commonly used to execute SceneScript code at every frame that Wallpaper Engine calculates. The `init` event is good for running code once when the wallpaper is first loaded and the `applyUserProperties` event allows you to react to changes to user properties of your wallpaper. Additionally, there are a handful of `cursor` events which related to mouse movement and mouse input which you can incorporate into your wallpaper.

| Event                | Description   |
|----------------------|---------------|
| [init](/scene/scenescript/reference/event/init) | This initialization function will be called once after the object it belongs to has been created. |
| [update](/scene/scenescript/reference/event/update) | This event function will be called every frame for all scripts that export it. |
| [destroy](/scene/scenescript/reference/event/destroy) | This event function will be called just before the object it belongs to gets destroyed. |
| [resizeScreen](/scene/scenescript/reference/event/resizeScreen) | This function will be called every time the wallpaper resizes because of a change to the current resolution. |
| [applyUserProperties](/scene/scenescript/reference/event/applyUserProperties) | This event function will be called once initially when the wallpaper is loaded and whenever any user properties are being adjusted by the user. |
| [cursorEnter](/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor enters the bounds of the object. |
| [cursorLeave](/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor leaves the bounds of the object. |
| [cursorMove](/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor has been moved. |
| [cursorDown](/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor is being pressed down on an object. |
| [cursorUp](/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor is being released over an object.  |
| [cursorClick](/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor has been pressed and released on the same object. |

## Classes

All components of Wallpaper Engine are provided with a fitting class so that you can access everything programmatically. The following list contains all relevant classes introduced by SceneScript:

| Class                | Description   |
|----------------------|---------------|
| [AnimationEvent](/scene/scenescript/reference/class/AnimationEvent) | This object describes an animation event that has been fired from a timeline or puppet warp animation. |
| [CameraTransforms](/scene/scenescript/reference/class/CameraTransforms) | Objects of this class describe the camera orientation and position. |
| [IAnimation](/scene/scenescript/reference/class/IAnimation) | This class represents a timeline property animation. |
| [IAnimationLayer](/scene/scenescript/reference/class/IAnimationLayer) | This class represents a puppet warp animation layer. |
| [IAudioBuffers](/scene/scenescript/reference/class/IAudioBuffers) | Provides access to the left and right audio spectrum values and their combined average for audio visualization purposes. |
| [IConsole](/scene/scenescript/reference/class/IConsole) | You can access this interface anywhere in your SceneScript code through the global `console` object to interact with the console log. |
| [ICursorEvent](/scene/scenescript/reference/class/ICursorEvent) | Provides information about the cursor position during cursor events. |
| [IEffect](/scene/scenescript/reference/class/IEffect) | Provides access to image effects used on image layers. |
| [IEngine](/scene/scenescript/reference/class/IEngine) | Provides general information about the user device and the running wallpaper. |
| [IImageLayer](/scene/scenescript/reference/class/IImageLayer) | This class provides access to functions specific to image layers.
 |
| [IInput](/scene/scenescript/reference/class/IInput) | Provides access to input related data, mainly the mouse cursor. |
| [ILayer](/scene/scenescript/reference/class/ILayer) | Provides access to data related to a layer. |
| [IMaterial](/scene/scenescript/reference/class/IMaterial) | Provides access to dynamic properties of materials / shader properties. |
| [IParticleSystem](/scene/scenescript/reference/class/IParticleSystem) | Provides access to particle systems and lets you modify their playback state. |
| [IParticleSystemInstance](/scene/scenescript/reference/class/IParticleSystemInstance) | Provides access to instance modifiers for particle systems. You can use this to adjust details of a particle system dynamically. |
| [IScene](/scene/scenescript/reference/class/IScene) | Provides access to properties of the currently loaded scene. |
| [ISoundLayer](/scene/scenescript/reference/class/ISoundLayer) | Provides access functions specific to sound layers. |
| [ITextureAnimation](/scene/scenescript/reference/class/ITextureAnimation) | This class represents a texture animation. |
| [IVideoTexture](/scene/scenescript/reference/class/IVideoTexture) | This class represents a video texture animation. |
| [Mat4](/scene/scenescript/reference/class/Mat4) | Utility class used for creating a 4 dimensional identity matrix. |
| [Shared](/scene/scenescript/reference/class/Shared) | Related to the global object `shared` which you may use to share data between multiple scripts. |
| [Vec2](/scene/scenescript/reference/class/Vec2) | Utility class which holds a 2 dimensional value pair: `x` and `y`. |
| [Vec3](/scene/scenescript/reference/class/Vec3) | Utility class which holds a 3 dimensional value pair: `x`, `y` and `z`. |

## Modules

Wallpaper Engine also provides some modules which can be used to access certain utility functions. These can be helpful to easily implement certain use-cases.

| Module                | Description   |
|----------------------|---------------|
| [WEColor](/scene/scenescript/reference/module/WEColor) | Module which provides utility functions related to color manipulation. |
| [WEMath](/scene/scenescript/reference/module/WEMath) | Module which provides utility functions related to general mathematical functions. |
| [WEVector](/scene/scenescript/reference/module/WEVector) | Module which provides utility functions related to working with vectors. |
