# Texture User Property

If you would like to allow users to replace a texture with an image or video of your choice, you can use the texture user property to do so. The texture user property can be bound to:

* Image layers
* Effect masks
* Particle system textures

In this guide, we will showcase the basic example using an image layer, which is the most common use-case for this feature.

Keep in mind that any effects and their masks will not be updated when a user replaces a texture, so this feature is best-suited for simple image layers without complex effect masks.

## Making an Image Layer Configurable

To get started, select an image layer of your choice in the editor, then check the right-hand side and navigate to the **Advanced Texture Settings** button towards bottom.

You will see the **Albedo** texture of your image layer, which is the base image that is being used for your image. Click on the cogwheel icon next to it and select **Bind User Property**. You will now be presented with the user property selection screen. You can now create a new **Texture** type user property and link it to the texture of your image layer.

When viewing your wallpaper in the **Installed** tab of Wallpaper Engine now, you will find your new texture property on the right-hand side. Users can now import all compatible image and video formats.

You can see this entire process in the following video:

<video width="100%" controls>
  <source src="/videos/property_texture.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
