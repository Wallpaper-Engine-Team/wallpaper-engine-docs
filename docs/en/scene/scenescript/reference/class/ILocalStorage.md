---
prev: ../../reference.md
---

# SceneScript Class ILocalStorage

You can access this interface through the global object `localStorage` anywhere in your SceneScript code to interact with the local data storage. This allows you to store values (up to 100 KB per wallpaper) per screen or per machine. This data is cleared when a user makes use of the **Reset** functionality in the wallpaper settings.

By default, local storage stores data per screen using the `LOCATION_SCREEN` constant. This is the same behavior as user properties.

::: warning Please note
Local storage is generally not meant to store user preferences but rather persist data for visualization purposes. If you want to make your wallpaper configurable, use user properties instead:

* [User Properties](/en/scene/userproperties/overview.html)
:::

## Constants

### LOCATION_GLOBAL

When using `LOCATION_GLOBAL` as a location parameter in various ILocalStorage functions, the values will be written across all screens. This is useful if you want to store data that should be re-used across multiple screen. For example, if you create a game-like wallpaper and keep track of a high score, this value should be stored globally since the high score would be valid across screens.

### LOCATION_SCREEN

This is the default setting for all ILocalStorage functions. When storing or retrieving data from the local storage, it will be specific to the screen that the user is using. This is useful if you are storing data which may not be valid on other screens.

## Functions

### get(key: String, location?: String): any

Retrieve a value from the local storage.

### set(key: String, value: any, location?: String): void

Write a value to the local storage. The `location` parameter is optional an can be used in conjunction with the location constants described above. By default, `LOCATION_SCREEN` is used.

## clear(location?: String): void

Deletes the contents of the local storage for your wallpaper. The `location` parameter is optional an can be used in conjunction with the location constants described above.

## delete(key: String, location?: String): Boolean

Remove a specific key value from storage. The `location` parameter is optional an can be used in conjunction with the location constants described above.