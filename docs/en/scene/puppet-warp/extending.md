# Extending an existing Puppet Warp

Ideally, puppet warp character sheets are properly set up when you start creating your animation. However, in some cases you may feel like extending an existing puppet warp animation in a later stage of the animation process. Wallpaper Engine allows you to reimport an extended character sheet with new body parts, though you need to follow some basic guidelines to do so.

## Preparing the updated character sheet

First, take your original character sheet and extend it by the size that you need to add your new content. **You need to extend the character sheet either on the right-hand side or the bottom.** Make sure to keep the extended area as small as possible and only add as much space as you need for the new parts of your puppet warp.

::: tip
Instead of extending the character sheet, you can also add the limbs / objects in between existing ones if there is enough space left. This is preferable, as smaller textures are always better for performance.
:::

The following animation shows how you would add a new object into an existing character sheet. In this example, we increase the image by adding new pixels on the right-hand side. It is important that the original character elements remain in the exact same position as before.

![Puppet Warp - Extension](/img/puppet-warp/puppet_warp_extension.gif)

## Importing the new sheet

Once you have updated your character sheet, select your puppet warp image layer and scroll to the **Advanced Texture Settings** button towards the bottom of the property list on the right. Next to the **Albedo** texture, click on the **Manual Editing** button, followed by **Import Texture File** to import your updated texture. Your existing puppet warp animation should remain intact and the new parts should appear.

## Updating your puppet model

You now need to go through the puppet warp steps once again.

The geometry is updated automatically, unless you enabled the locked vertex geometry mode. In that case, the geometry will not be auto-generated for the new parts, you will have to manually define the geometry in the geometry menu

Aside from the geometry, make sure to create new bones in the **Skeleton** of your puppet and possibly paint new weights in the third step of the puppet warp setup process. Your new puppet warp elements are now ready to be used as part of your animations.

::: warning
Please note that this feature may not work for very old puppet warp projects from Wallpaper Engine 1.7 and prior.
:::