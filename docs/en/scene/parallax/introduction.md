# Parallax Effect in Wallpaper Engine

The parallax options in Wallpaper Engine allow you to configure your wallpaper to move dynamically based on the movement of your mouse. This allows you, for example, to create a sense of depth on your wallpaper or to let the user "explore" an image much larger than the wallpaper itself by moving the mouse over the desktop to reveal different parts of the image.

You can enable the parallax effect in the **scene** options and additionally configure the amount of parallax applied on each individual layer with the **parallax depth** option.

# Depth Effect

We are going to add a depth effect to a scene with a space background and a space ship in front of it. We already have the background image and the space ship imported into the wallpaper editor and now we will enable the parallax setting and decrease the amount of parallax on the background, to create a sense of depth:

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_depth.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The background image will move outside of the canvas due to the parallax effect now. To compensate for this, we need to increase the scale of the background layer, otherwise the wallpaper will have ugly borders when used on the desktop.

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_depth_fix_borders.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

# Limit Parallax Directions

You can also limit the direction of the parallax scrolling effect to only allow for vertical or horizontal movement. In order to do this, you have to click the chain icon of the **parallax depth** property and then set the **X** or **Y** axis to 0 respectively.

We'll limit movement of the background layer of the wallpaper we just created to the horizontal axis by setting the **Y** property to zero like this:

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_depth_limit_movement.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Now the background will only move horizontally, along the **X** axis.

# Scroll an Oversized Image

We can import an oversized image an use the parallax effect to loosely make it possible for the user to "explore" the image by moving the mouse over the desktop. In order to do this, we'll import a very large image and disable the **Resize image** option when creating a new wallpaper so we'll get the full image resolution:

![Disable Resize](./tutorials/disable_resize.png)

After this, we'll adjust the project resolution to 1920 by 1080 pixels and re-center the image we imported:

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_explore_resolution.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Now we'll enable the parallax effect again and can adjust the size of the image or parallax strength to tweak the effect. We want to make sure that no borders become visible when the mouse is at any corner of the canvas:

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_explore_finalize.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
