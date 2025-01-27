# Texture Optimization

Wallpaper Engine will inform you during the publishing process if certain layers use an unusually high amount of VRAM. The warning message you see will show the filepath to all layers which could be optimized. The filepath might differ from the name that you have manually assigned to the layer.

Select the relevant layers and navigate to the **Advanced Texture Settings** menu on the right-hand side. Next to the **Albedo** texture, click on the cogwheel icon and select **Texture Properties**.  Change the format from **RGBA 8888** to **DXT5** or **DXT1**. You should see an immediate reduction in VRAM usage in the performance statistics of your wallpaper. You can also use DXT5 right when first importing image files into the editor.

For more information, read the following performance optimization guide, especially the **Optimize Texture Format** section:

* [Optimize Texture Format](/en/scene/performance/texture.html#optimize-texture-format)