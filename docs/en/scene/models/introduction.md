# 3D Model Support

Wallpaper Engine supports importing 3D models including animations and textures. 3D models should be imported as `.fbx` files, though for very basic models without animations, you can also use the more basic `.obj` file format.

## Getting Started

It is important to note that Wallpaper Engine differentiates between 2D and 3D scenes. While both scene types do support 3D models, 2D scenes disable perspective rendering by default and the handling of the editor is also much more focused on 2D objects. In 3D wallpapers, you can also move camera objects freely in a 3D space while 2D scenes are limited to a top-down perspective. You will also have different assets available to you the asset list. Before you get started, you should essentially decide whether the focus of your wallpaper is on animating 2D or 3D elements, though both can be done in either mode.

If you create a new wallpaper by first importing a 3D model, the wallpaper will be created as a 3D scene. Alternatively, you can use the **Use Template** button in the *new wallpaper* screen to manually choose whether or not your scene will be created as 2D or 3D scene. You can add 3D models to your 2D wallpapers by clicking on **Add Asset** on the left-hand side of the editor and selecting **Model** from the list.