# Getting started with 3D Models

Wallpaper Engine supports importing 3D models including animations and textures. 3D models should be imported as `.fbx` files, though for very basic models without animations, you can also use the more basic `.obj` file format.

## 2D Scene or 3D Scene?

It is important to note that Wallpaper Engine differentiates between 2D and 3D scenes. While both scene types do support 3D models, 2D scenes disable perspective rendering by default and the handling of the editor is also much more focused on 2D objects. In 3D wallpapers, you can also move camera objects freely in a 3D space while 2D scenes are limited to a top-down perspective. You will also have different assets available to you the asset list. Before you get started, you should essentially decide whether the focus of your wallpaper is on animating 2D or 3D elements, though both can be done in either mode.

If you create a new wallpaper by first importing a 3D model, the wallpaper will be created as a 3D scene. Alternatively, you can use the **Use Template** button in the *new wallpaper* screen to manually choose whether or not your scene will be created as 2D or 3D scene. You can add 3D models to your 2D wallpapers by clicking on **Add Asset** on the left-hand side of the editor and selecting **Model** from the list.

## Importing and Configuring 3D models

Before you get started with your model, you should be aware of some pitfalls:

1. Model sizes are not standardized. Models may appear extremely large or extremely tiny after importing them. Simply adjust the scale after importing. **Tip:** You can hold SHIFT while resizing a model with the editor controls to make the resizing more fine-tuned.
2. Make sure that `-z` is configured as the forward axis and `+y` as the up axis in your model file. This is the default Blender setting for FBX but you should still be aware of this technical detail. If the axes are misconfigured, you can import your models into Blender and select the output axes when exporting as FBX.

### Import your FBX file

Once your model is ready, make sure its texture file is placed are placed in the same directory. If you have a normal map, also place it in the directory of your model during the import process. During the import model dialog, you can manually load the texture and normal map file if they are not detected automatically.

### Advanced Texture Settings

Once your model is imported, you can further configure various rendering details by selecting it and clicking on the **Advanced Texture Settings** button on the right-hand side.

Here, you will find various options related to lighting, reflection and rendering:

* **Lighting:** Enabled by default. Disable if no lights sources will be placed in your wallpaper.
* **Reflection:** Enables reflections and the reflection map below.
* **Rim lighting:** Enables silhouette lighting which can add a perceived depth to the rendered model.
* **Toon shading:** Changes the model rendering to toon shading (also known as *Cel-shading*) which is useful for cartoon-like characters. **Tip:** Try using it in combination with **Rim lighting**. 
* **Tint mask in albedo alpha:** When enabled, the alpha channel of the main albedo texture determines the areas of the texture that are tinted using the tint color option below.

Additionally, you can import various maps which allow you to implement a form of physically-based rendering (*PBR*) to your model:

* **Albedo:** The main texture of your model.
* **Normal map:** Allows you to import and normal map for your model.
* **Metallic map:** Marks certain area as metallic and increases their reflective properties.
* **Roughness map:** The roughness map affects the scattering of the reflected light, essentially it defines how blurry the reflection is.
* **Reflection map:** Allows you to create a map to decrease the reflection in some areas of the texture if needed.
* **Emissive map:** Areas marked in the emissive map will appear to emit light and glow in dark scenarios. Keep in mind that emissive maps are not real light sources.

## Next Steps

If your model does not come with any bones and animations, the setup is completed at this point and you can use the model as part of your wallpaper scene. Consider adding lights to your wallpaper, see the advanced lighting guide for more information:

* [**Tips for Advanced Lighting**](/en/scene/lighting/lights.html)

If your model does have animations, we recommend that you continue with the animation tutorial in order to learn how to import and organize animations within Wallpaper Engine:

* [**Model Animation Setup**](/en/scene/models/animation.html)