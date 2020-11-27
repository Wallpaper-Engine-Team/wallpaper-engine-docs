# RGB Hardware Support

Wallpaper Engine allows you to take control of supported RGB devices through its API and synchronize your wallpaper with LED hardware.

TODO mention razer emulator and its issues (reinstalls of synapse and emulator, restarting wpe to take effect).

## Initializing the LED plugin

Before any LED-related code is executed, you should first check if the led plugin has been loaded, until then any related logic should be skipped.

```js
var wallpaperSettings = {
    ledPlugin: false,
    cuePlugin: false
};

window.wallpaperPluginListener = {
    onPluginLoaded: function (name, version) {
        if (name === 'led') {
            // LED plugin loaded (works for all hardware)
            wallpaperSettings.ledPlugin = true;
        }
        if (name === 'cue') {
            // iCUE-specific plugin loaded, only needed if you want to utilize extra iCUE functions
            wallpaperSettings.cuePlugin = true;
        }
    }
};
```

## Sending color data from an HTML canvas

The main approach to sending color data to RGB hardware is to utilize the `setAllDevicesByImageData` function which can be found in the `window.wpPlugins.led` object:

```js
window.wpPlugins.led.setAllDevicesByImageData(encodedImageData, width, height);
```
The function must be provided with concatenated RGB data in the form of a string as its first parameter and also requires the width and height of the reference image as additional parameters. The recommended way to create this data is to draw an HTML canvas and then turn that into the RGB data string.

We recommend the following approach to converting a canvas into RGB data:

```js
function getEncodedCanvasImageData(canvas) {
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var colorArray = [];

    for (var d = 0; d < imageData.data.length; d += 4) {
        var write = d / 4 * 3;
        colorArray[write] = imageData.data[d];
        colorArray[write + 1] = imageData.data[d + 1];
        colorArray[write + 2] = imageData.data[d + 2];
    }
    return String.fromCharCode.apply(null, colorArray);
}

// Only execute this logic if the LED plugin has actually been loaded
if (wallpaperSettings.ledPlugin) {
    var encodedImageData = getEncodedCanvasImageData(canvas);
    window.wpPlugins.led.setAllDevicesByImageData(encodedImageData, canvas.width, canvas.height);
}
```

This is currently the most efficient way to compress and send the bitmap. It's still important that you choose a canvas of appropriate size (100 x 20 pixels) to minimize the performance impact, you can efficiently downsample any given canvas by copying it to a smaller one first before generating the bitmap.

## Additional Corsair iCUE functions

https://wallpaper-engine.fandom.com/wiki/Web_Wallpaper_iCUE_Reference