# Texture Optimization

Reducing the memory required to display images will improve the performance and compatibility of the wallpaper. Some systems may have a limited amount of VRAM (video memory), if a wallpaper exceeds that, it would make the whole desktop unusable and sluggish. As a general guideline, using ~300 MB VRAM or less is great, using less than 500 MB is also still acceptable.

## Checking Texture Memory Usage

You can check the currently required texture memory in the editor by choosing View -> Show Stats.

![Show Scene Stats](/img/performance/View_show_stats.png)

The stats will then be displayed in the scene window with Active texture memory at the very bottom.

![Scene Stats](/img/performance/Stats.png)

## Optimize Texture Format

Graphics cards do not support rendering of common image formats like JPEG and PNG. In video memory, these images are decompressed. However, different compression methods called DXT 5 and DXT 1 can be displayed by a graphics card and will occupy a quarter of memory compared to the decompressed image.

::: tip
The compressed formats DXT 5 and DXT 1 require an image to use a resolution that is a power of two. Wallpaper Engine will handle this for you and it will add invisible padding - but of course this increases the memory size again! So to optimize your images effectively, you should also resize them to fit into a power of two resolution. See the next paragraph for details.
:::

You can choose this compression either when importing a new image:

![Import Texture Compression](/img/performance/Import_compression.png)

The first background image is always imported without compression to provide the highest quality and simplify the process, but you can always re-import it later and then choose a different compression if you like.

## Optimize Texture Resolution

Compressed textures need to have a resolution of a power of two to be displayed by your computer. Wallpaper Engine will simply pad your image with black pixels and adjust everything automatically to make this easier for you. However, the amount of memory required increases. So you should consider this when checking the resolution of your image.

In this example a normal 1920 x 1080 image was imported. It has to be padded to a resolution of 2048 x 2048, because that's the next power of two. As you can see, there are a ton of black pixels in the example, half of the memory used is practically wasted.

![Texture Padding](/img/performance/Power_of_two_padding.jpg)

You should consider reducing the height of the image to 1024, then Wallpaper Engine can create a 2048 x 1024 texture instead, that's only half the memory that was needed before. Of course this means that your actual image has a smaller resolution as well, so you need to decide if and how this trade-off works for you. You can simply scale the layer in Wallpaper Engine to correct for this reduction in size by 1.055 (which is 1080 / 1024):

![Texture Padding](/img/performance/Fix_optimized_scale.png)

::: tip
If you optimized the background image like this, check in **Edit -> Project Settings** that you are using the correct project resolution, otherwise your image will be cut off.
:::


















