# Texture Variants

A more advanced feature of Wallpaper Engine is the ability to set up texture variants. This allows you to configure pre-defined images which users can choose from via **user properties**. This allows you to let users choose between multiple designs of a character or another on-screen element as long as the size remains exactly the same.

::: warning Please note
Texture variants can only be controlled through user properties. They cannot be controlled via SceneScript.
:::

## Configuring a Basic Texture Variant

To get started, click on a layer that you want to set up a texture variant. On the right-hand side, click on the **Advanced Texture Setting** button, then, next to the **Albedo** texture (which is the texture that represents your image), click on the cogwheel icon and select **Texture Properties**. You are now presented with a property overview for the texture itself.

In the **Variants** section, click on **Add Variant Group** to get started with the setup. You may give your variant group a relevant name that describes the overall feature that is changed by the variant (such as "Clothes", "Face", "Background" etc.).

Once you have created your variant group, click on the "Add Option" button and select the texture you want to use as a variant. It is important that the variant texture is of the same type (image or video) and has the same resolution as the base texture.

As a last step, you need to assign either a [**Checkbox**](/en/scene/userproperties/checkbox.html) or a [**Combo**](/en/scene/userproperties/combo.html) user property to the option. Click on the **Condition** button and either assign or create a user property.

Finally, you can test your solution quickly by selecting the **User Properties** tab at the bottom of the editor and changing the default value of the user property.

See the entire process in the following video:

<video width="100%" controls>
  <source src="/videos/texture_variant_basic.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Creating Multiple Texture Choices

You can also offer multiple textures to choose from within a single variant group. Only one texture is visible per variant group. If you have multiple variants in a single group, we recommend using a [**Combo**](/en/scene/userproperties/combo.html)-type user property which offers multiple choices, of which the user can choose a single one.

To configure a multi-texture setup like this, prepare at least three versions of your texture (in our example: one default texture, two variants). Make sure to add all variants of your texture to the same variant group. Then, for the **Condition** option, create or select a **Combo** user property. Set up the combo property up by creating an option for each of your texture variants, including the default texture. Make sure to assign each variant one value in the combo property and leave one default value unused for the base texture.

Take a look at the following example where we have an image of a green apple to which we add two variants, a red apple and an orange apple. Take note that the **Green** option in the combo property is never assigned, it represents the default texture.

<video width="100%" controls>
  <source src="/videos/texture_variant_combo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## Optional Elements via Alpha Blending

Texture variants also allow you to add new elements to your image. Start by creating a translucent image which has the same resolution as your base image. Then, add non-translucent content to your image in the places that you want the objects to appear in.

If you have any existing variant group for the overall look and feel of your image, it is important that you create a separate **variant group** for your alpha-blended texture, since variant groups only ever show one texture at a time.

Next, add a new variant option like in the previous examples on this page and import your translucent image. Now, change the variant behavior from **Replace** to **Alpha-blended**. This will ensure that Wallpaper Engine will only add non-translucent parts of your image on top of the base image instead of replacing it in its entirety.

Just like before, assign a user property to your variant option. See the full process and result here:

<video width="100%" controls>
  <source src="/videos/texture_variant_alpha.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>