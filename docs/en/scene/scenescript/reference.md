# SceneScript Reference

## Globals

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

## Modules