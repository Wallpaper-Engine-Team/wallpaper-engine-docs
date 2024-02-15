# Local Storage in SceneScript

SceneScript allows you to store up to 100 KB of data per wallpaper. This can be useful if you want to track certain data points across system restarts or just wallpaper changes.

## Persisting Data with Local Storage

Local storage is handled via the [ILocalStorage](/en/scene/scenescript/reference/class/ILocalStorage.html) class. You can access this feature via the `localStorage` global variable which is available anywhere in SceneScript.

### Storage Location: Global or Per Screen?

First, you need to decide if your data is related to the specific screen that the wallpaper is running on or if it is something that is valid across all potential screens a user might have.

In our example, we want to store the high score of a game-themed wallpaper. The high score is valid across all screens, so we want to store it globally using the `LOCATION_GLOBAL` constant.

An opposite example would be if we wanted to keep track of the position of some wallpaper element on the screen. In this case, we would instead store this value per-screen using `LOCATION_SCREEN`. This is also the default state, so if you do not specify this option, wallpaper settings will be stored per screen.

### Storing Data

To actually store our data, we simply access the global `localStorage` object anywhere in our code. Use the `localStorage.set()` function to store your data:

```js
localStorage.set('highscore', userScore, localStorage.LOCATION_GLOBAL);
```
The first `'highscore'` parameter is the key under which we store our data. Name it appropriately for your use-case, you will need this later to retrieve the data again. The `userScore` variable contains the data we want to store, this would need to be replaced by whatever you want to store. Additionally, we set the location to `LOCATION_GLOBAL` because our high score is valid across all screens, see the section above for a lengthier explanation.

### Loading Data

While you can load data anywhere in your code, we highly recommend to do this only once in the [init](/en/scene/scenescript/reference/event/init.html) event and assign the loaded data to a variable that you can use throughout your code. The `init` event is triggered whenever the wallpaper is loaded, allowing you to load the data from storage before any other functions run.

To retrieve data, use the `localStorage.get()` function and re-use the same storage key and storage location that you have used while setting the data. In our example, we will re-use `highscore` and `localStorage.LOCATION_GLOBAL` and assign it to a global variable that we are calling `currentHighscore`.

Additionally, you may want to set a default value in case no value was found in the local storage. In our example, we want to set a default value of 0 if no data is found. We accomplish this by adding a logical *"or"* after the function: `|| 0`.

```js
var currentHighscore;

/**
 * @param {Boolean} value
 */
export function init(value) {
    currentHighscore = localStorage.get('highscore', localStorage.LOCATION_GLOBAL) || 0;
}
```