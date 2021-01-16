# Color User Property

A custom color property will allow users to change your wallpaper to match their personal tastes. Being able to change the color of objects or clothes on your wallpaper can make it stand out.

This tutorial will show you how you can use a color user property and the tint effect to adjust the color of a specific part of the wallpaper. We'll start with the image already being imported in the editor.

# Add Tint Effect

Click on **Add** in the effects menu on the right side and choose the **Tint** effect to begin.

<video width="100%" controls loop autoplay>
  <source src="/videos/property_color_add_tint.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

We'll need to mask the effect to the apple on the wallpaper in this case, so click on **Paint** near the **Opacity Mask** to begin painting the area. By default, the mask will be cleared with a ***black*** value, which means the effect becomes invisible. Use the brush tools to paint a ***white*** value exactly where the apple is. Click OK when you're done:

<video width="100%" controls loop autoplay>
  <source src="/videos/property_color_paint_mask.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Now click on the cog wheel next to the **Color** property and choose **Bind User Property**. Click on **Add Property** and choose a proper name and default color for your new property, we'll call it ***Apple Color***:

<video width="100%" controls loop autoplay>
  <source src="/videos/property_color_add_property.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
Instead of adding a new property, you can also select the **Scheme Color** property which is always added to each wallpaper by default. If you use multiple effects, they can also share the same property.
:::

# Check Wallpaper Browser

All done! You can now select your new wallpaper in the wallpaper browser and adjust the apple color there:

<video width="100%" controls loop autoplay>
  <source src="/videos/property_color_finished.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
