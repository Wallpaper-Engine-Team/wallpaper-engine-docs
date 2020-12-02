---
prev: ../overview.md
---
# Perspective Effect

The **Perspective** effect allows you to apply a perspective transformation to the image. This can be useful to apply effects to the sky or floor, any surface that have a strong visible perspective.

::: tip
You should apply this effect only on top of other existing effects. If you apply this effect merely to a static image, consider modifying your image in an image editor instead to improve the performance of the wallpaper, since there is no need to use a live effect for that.
:::

![Perspective](/img/effects/Perspective.gif)

### Effect Settings

* **Mode:** Whether you want to distort the pixels or the edges of the layer. If you choose *UV* then you will distort the pixels which allows you to add additional effects after this effect and is usually what you want to use. If you choose *vertex* you will distort the edges of the layer and it will only work correctly if this effect is the last one that will be displayed.
* **Repeat:** Whether the image should repeat until the edges or be clamped. This is only relevant for the UV option.
* **Bottom:** Distortion of the bottom edge. Negative values will stretch the edge, positive values will compress it.
* **Left:** Distortion of the left edge. Negative values will stretch the edge, positive values will compress it.
* **Right:** Distortion of the right edge. Negative values will stretch the edge, positive values will compress it.
* **Top:** Distortion of the top edge. Negative values will stretch the edge, positive values will compress it.
