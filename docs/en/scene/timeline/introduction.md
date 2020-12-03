# Timeline Animation Introduction

Timeline animations allow you to create animations with a pre-defined length for all properties of your wallpaper components. If that sounds confusing, don't worry, this guide will introduce you to all steps needed to create timeline animations by providing a few sample use-cases with in-depth explanations.

::: tip
Do not confused timeline animations with animations that are created through [effects](/scene/effects/overview), they are entirely different concepts.
:::

## Creating a simple movement animation

In order to get started with timeline animations, let's say you want to repeatedly move an object - in our case a cloud - from one side of your image to the other side.

The first step is to establish what you actually want to animate, so let's have a look what happens if you move an object from left to right in the editor:

<video width="100%" controls loop autoplay>
  <source src="/videos/timeline_intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You can see how the X axis on the *Origin* property increases as you move the object from left to right. So for this animation, we want to assign a timeline animation to the *Origin* property, specifically the *X axis*. We can do so by clicking on the cogwheel icon next to *Origin* and selecting *Bind Timeline Animation*.

Once you click on *Bind Timeline Animation*, you are presented with the basic options of the animation:

* **Mode:** Changes the playback behavior of the animation:
    * *Loop:* The animation will run to the end and then immediately jump back to the beginning once it is complete.
    * *Mirror:* The animation will return to the beginning backwards once it reaches the end.
    * *Single:* The animation will only play once and then stop at the last frame.
* **Seconds:** The number of seconds that the animation runs from the first to the last frame.
* **Frames:** The number of key-frames which are the individual steps of each animation.
* **Name:** Optional name for the animation, especially useful when using an animation in combination with *SceneScript*.
* **Start paused:** If the animation starts paused, you need to manually start it with *SceneScript*.

For this example, we will keep **Mode** as **Loop** since we want the cloud to re-appear on the left once it has reached the end. The **Seconds** essentially decide how long the cloud takes to travel from left to right, for this tutorial we set it to **3 seconds** but that's just a matter of taste. The **frames** decide how many detailed steps there are in the animation. Generally you can leave this at 30 for most animations but since this is a really simple example, we'll reduce it to **10**. We set the name to *Cloud Movement* to recognize the animation later and the **Start paused** option stays **off** because we want the animation to just run the whole time:

TODO add video of that here.