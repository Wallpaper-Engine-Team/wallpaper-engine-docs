# Clipping Masks

Clipping masks are a useful tool to restrict the visibility of certain parts of a puppet warp model until it moves over predefined areas. This can be used to implement some unique effects and is especially useful for creating the appearance of animated shadows or shading on an object.

If you want to achieve this type of self-shadowing effect, your image ideally does not include shadows itself. Rather, you would create the shadows with separate elements and overlay them in Wallpaper Engine at runtime.

## Basic Principle of Clipping Masks

Clipping masks can be used in combination with puppet warp [character sheets](/scene/puppet-warp/charactersheet). To get started with a clipping mask, create a puppet warp image layer. Make sure to lock the geometry in the **Geometry** settings of the puppet warp setup. Afterwards, set up the skeleton and weights of the puppet. Next, click on the **Clipping Masks** button at the bottom of the **Optional** puppet warp settings.

You will find all limbs in the list on the right-hand side. Select the limb which represents the part of the puppet that you want to be hidden by default. In our showcase example, we want the purple ball to only be visible when it moves over the red rectangle. We select the limb representing the purple ball and click on **Assign Clipping Mask**. Follow the pop-up that appears and create a new clipping mask.

Next, paint over the limb that you want the hidden limb to become visible over. There is no need for precision, Wallpaper Engine will only draw the hidden element when the limbs actually touch each other. Once your mask is done, confirm with OK. The limb will now become invisible. See the following video to see these steps up until now:

<video width="100%" controls>
  <source src="/videos/puppet_warp_clipping_mask_basics.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You can also create nested clipping masks for very complex scenarios. In this case, one limb would only become visible over another limb and a third limb would only become visible when moved over both of the other limbs at the same time. 

::: danger Invalid Clipping Masks
Wallpaper Engine will display an warning message if you create invalid clipping masks. **For example, you cannot create a clipping mask from one limb to another and then back from the second limb to the first limb.**
:::

### Using a Clipping Mask in Animations

Once you create a clipping mask, the affected limb will immediately become invisible in the editor. However, this is to be expected and limbs can still be used in animations. Take a look at the following example where we move our previously hidden limb over the designated clipping mask:

<video width="100%" controls>
  <source src="/videos/puppet_warp_clipping_mask_basics_animation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The clipped limb becomes immediately visible when touching the other object, however, it remains invisible when it hovers over the other limbs which we did not include in the clipping mask. This is the basic principle behind clipping masks.

## Shadows & Shading with Clipping Masks

While the previous example was a bit abstract, this section will showcase how to utilize clipping masks to create shading and shadows on your puppet warp objects.

Before you get started, this example mostly makes sense on characters and objects which do not have any significant shadows drawn into the image. Ideally, your image features no shading at all and you utilize clipping masks to add this effect yourself, though it's not strictly necessary.

### Preparing the Character Sheet

Before we can start with the animation itself, we have to prepare a character sheet which features the shadows we want to cast. In our example, we first duplicate the arm of our dummy model with the image editor of our choice and then reduce it to a black shape. Next, we add a slight gaussian blur to the shadow limb to make it appear softer (like a real shadow would be). However, depending on the art style of your image, a blur might not be necessary. We also reduce the opacity of the shadow arm to around 20% - 30% since the shadow itself should not appear like a solid black object. Repeat this process for all individual shadows that you want to animate in your wallpaper.

### Puppet Warp Setup

Import the character sheet with your shadow limbs and create a new puppet warp animation. Just like in the **Basic Principle of Clipping Masks** section above, lock the geometry and create the puppet skeleton. Treat the shadow like another limb and assign it to the same parent bone as the limb it represents. Alternatively, you could also create a new root bone for your shadow and handle it separately from all the other limbs.

When creating a **Reference Pose** for your character sheet, place any shadow limbs exactly where you want them to be during your animation. Usually, this would be slightly offset from the limb they represent. If the shadow limb is not using a separate bone, you can offset its geometry with the **Geometry Deformation** editor to move it below the limb you want to create a shadow for.

### Puppet Warp Shadow Animation

Now that your puppet is ready to be animated, simply mimic the animation of the limb that your shadow represents. In our example, we first move the arm of our character. In the next step, we create a similar animation for the shadow. The user will now perceive this as a shadow that is casting from the arm onto the body of our character.

See the full process in this video:

<video width="100%" controls>
  <source src="/videos/puppet_warp_clipping_mask_basics_animation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>