# Audio Visualization

Wallpaper Engine allows you to process audio volume levels for the left and right audio channel and use that to visualize audio that is being played on the user's system. Each channel splits the audio frequencies into 64 parts. Each part represents a frequency range for the audio: Low frequencies represent bass while high frequencies represent treble sound ranges.

Utilizing these volume levels allows you to build various types of audio visualization, from full-on bar audio visualizers, to making certain elements on your wallpaper react to the beat of music (by only looking at low frequency ranges, as they usually represent the beat of audio being played).

## Creating an audio listener

In order to get started with an audio visualizer, you have to register a listener function in JavaScript that will supply the audio volume levels to you. Wallpaper Engine provides the `window.wallpaperRegisterAudioListener` function for this purpose, it expects a callback function that you also need to create.

You should call the `wallpaperRegisterAudioListener` function once within the `window.onload` event as shown in the sample below. In the example below, we're also creating an empty `wallpaperAudioListener(audioArray)` function that is handed as a callback parameter to the `wallpaperRegisterAudioListener`. The function will later contain your custom logic for the audio handling. The name for that funtion is up to you, but it must have parameter that takes the audio volume levels as an array.

```js
function wallpaperAudioListener(audioArray) {
    // Handle audio input here
}

window.onload = function() {
    window.wallpaperRegisterAudioListener(wallpaperAudioListener);
};
```

The `wallpaperAudioListener` function will now be called when new audio samples arrive, which occurs roughly 30 times per second.

## Processing the audio samples

The actual audio data is included in the `audioArray` that we have created as a parameter to our `wallpaperAudioListener` function above. This array has a fixed length of 128.

Array elements **0 until 63** contain volume levels for the **left channel**.
Array elements **64 until 127** contain the volume levels for the **right channel**.

The lower array elements for each channel represent bass frequencies, so at array index 0, you will find the lowest bass sounds for the left channel and at array element 64, you will find the bass sounds for the right audio channel. The higher up you go in the array, the higher the audio frequencies will get, so array indices closest to 64 will contain treble audio volume levels for the left channel and array indices closest to array index 127 will contain the treble audio volume levels for the right channel.

Each array will contain a floating point value from 0.00 to 1.00. 0.00 means that the specific frequency is currently not playing any sound and 1.00 means that the frequency is playing at its maximum volume.

Due to the nature of JavaScript floating point values, it may be that values close to 1.00 may turn out higher than 1.00 (so you might get an unwanted value like `1.000000001` - seasoned JavaScript developers are well aware of this). For that reason, it may be a good idea to use `Math.min()` to clamp the audio levels to exactly 1.00 in cases where this might cause issues with the rendering of your wallpaper.

## Audio visualization example

<video width="100%" loop autoplay>
  <source src="/videos/web_audio_visualizer.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In the following example, we are providing a very basic full implementation of the audio visualizer previewed above. You can easily copy-paste this into an .html file, import it into Wallpaper Engine and it should work straight away. We don't recommend placing all scripts, styles and HTML content into one file normally, however, for the sake of this tutorial, it's easiest to see it all in one place.

The HTML and JavaScript example below contains detailed comments that should help you understand it. Let's have a closer look at some of the details, though:

First, the CSS rules allow the canvas to fit on any resolution and any aspect ratio. You should always make sure that your wallpaper works on any type of screen resolution and aspect ratio, it's bad practice to only consider one resolution in your work and it usually only takes a few minor tweaks to ensure it works fine. In this example, we're resetting the default `margin` and `padding` on the body to 0 and hide any `overflow` (which shouldn't be necessary but it can be a good way to prevent scrollbars appearing in some edge cases). Next up, we set the canvas to be equal to the full width and height of the user's viewport. It's important to note that `<canvas>` elements use an internal resolution for rendering and have another resolution that is used for its size in HTML / CSS, so it's best to specifically set the canvas height and width to the window height and width, which we're doing in the `onload` function:

```js
audioCanvas.height = window.innerHeight;
audioCanvas.width = window.innerWidth;
```

At the end of the `onload` function, we call the `wallpaperRegisterAudioListener` function which causes the `wallpaperAudioListener` to be executed whenever new audio data comes in. The function will draw the left audio channel in red and the right audio channel in blue (in reverse order for aesthetical purpose only). The key part of the code can be found here:

```js
for (var i = 0; i < halfCount; ++i) {
    // Create an audio bar with its hight depending on the audio volume level of the current frequency
    var height = audioCanvas.height * audioArray[i];
    audioCanvasCtx.fillRect(barWidth * i, audioCanvas.height - height, barWidth, height);
}
```

The height of the audio bars is determined by the volume level of the frequency that is currently being iterated over in the `for` loop. Let's assume the user has a 1920x1080 screen resolution. If the height of the window is 1080 and the volume level for the current frequency is 0.50 (which means the current frequency is at 50% of its maximum audio levels), the bar for this specific frequency will be drawn with a height of 540 pixels (1080 * 0.50). This logic is repeated for all audio frequencies, each time Wallpaper Engine supplies a new set of audio data.

Of course this is a very basic example and you can change the type of visualization drastically, as more than just audio bars are possible with this. You can also try and add some interpolation between each calls to the `wallpaperAudioListener` function to smoothen the audio bar movement and make it less erratic, but in these cases you should consider adding an [FPS limit](/web/performance/fps) to your wallpaper.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <script>
    let audioCanvas = null;
    let audioCanvasCtx = null;
    function wallpaperAudioListener(audioArray) {
         // Clear the canvas and set it to black
        audioCanvasCtx.fillStyle = 'rgb(0,0,0)';
        audioCanvasCtx.fillRect(0, 0, audioCanvas.width, audioCanvas.height);

        // Render bars along the full width of the canvas
        var barWidth = Math.round(1.0 / 128.0 * audioCanvas.width);
        var halfCount = audioArray.length / 2;

        // Begin with the left channel in red
        audioCanvasCtx.fillStyle = 'rgb(255,0,0)';
        // Iterate over the first 64 array elements (0 - 63) for the left channel audio data
        for (var i = 0; i < halfCount; ++i) {
            // Create an audio bar with its hight depending on the audio volume level of the current frequency
            var height = audioCanvas.height * audioArray[i];
            audioCanvasCtx.fillRect(barWidth * i, audioCanvas.height - height, barWidth, height);
        }

        // Now draw the right channel in blue
        audioCanvasCtx.fillStyle = 'rgb(0,0,255)';
        // Iterate over the last 64 array elements (64 - 127) for the right channel audio data
        for (var i = halfCount; i < audioArray.length; ++i) {
            // Create an audio bar with its hight depending on the audio volume level
            // Using audioArray[191 - i] here to inverse the right channel for aesthetics
            var height = audioCanvas.height * audioArray[191 - i];
            audioCanvasCtx.fillRect(barWidth * i, audioCanvas.height - height, barWidth, height);
        }
    }

    window.onload = function() {
        // Get the audio canvas once the page has loaded
        audioCanvas = document.getElementById('AudioCanvas');
        // Setting internal canvas resolution to user screen resolution
        // (CSS canvas size differs from internal canvas size)
        audioCanvas.height = window.innerHeight;
        audioCanvas.width = window.innerWidth;
        // Get the 2D context of the canvas to draw on it in wallpaperAudioListener
        audioCanvasCtx = audioCanvas.getContext('2d');
        window.wallpaperRegisterAudioListener(wallpaperAudioListener);
    };
    </script>
    <style>
        body { margin:0; padding:0; }
        html, body { width:100%; height:100%; overflow:hidden; }
        canvas { height:100vh; width:100vw }
    </style>
    </head>
    <body>
        <canvas id="AudioCanvas"></canvas>
    </body>
</html>
```