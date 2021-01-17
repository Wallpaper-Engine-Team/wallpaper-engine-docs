# Parallax Effect in Wallpaper Engine

The parallax options in Wallpaper Engine allow you to configure your wallpaper to move dynamically based on the movement of your mouse cursor. The parallax effect can be configured to have different levels of strength for each layer of your wallpaper or can be turned off altogether for individual layers. This allows for a way to create a sense of depth and distance of objects and is a relatively simple way to make your wallpaper more interactive.

You can enable the **Camera Parallax** effect by navigating to the **scene options** on the left-hand side of the editor. The parallax effect has three main options shared by all elements:

* **Amount**: The overall strength of the effect.
* **Delay**: The delay between the user's mouse movement and the movement of layers.
* **Mouse influence**: The influence of the mouse movement. **You should change this value to be not zero**, as a value of 0 means that the mouse does not influence the effect which essentially disables it for 2D scenes.

Additionally, each layer receives a **parallax depth** option once you enable **Camera Parallax**. This allows you to fine-tune each layer's parallax or turn it off altogether by setting it to 0 for that specific layer.

## Basic Parallax Example

We have created a sample project with a space background and a separate space ship layer. In order to enable the parallax effect on this project, we first navigate to the **Scene options** (above the list of layers) and then enable the **Camera Parallax** option towards the bottom of the scene options.

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_depth.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The background image will move outside of the canvas due to the parallax effect now. To compensate for this, we need to increase the scale of the background layer, otherwise the wallpaper will have ugly borders when used on the desktop.

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_depth_fix_borders.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Limit Parallax Directions

You can also limit the direction of the parallax scrolling effect to only allow for vertical or horizontal movement. In order to do this, you have to click the chain icon of the **parallax depth** property and then set the **X** or **Y** axis to 0 respectively.

We'll limit movement of the background layer of the wallpaper we just created to the horizontal axis by setting the **Y** property to zero like this:

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_depth_limit_movement.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Now the background will only move horizontally, along the **X** axis.