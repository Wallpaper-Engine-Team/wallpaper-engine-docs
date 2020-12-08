# Puppet Warp Introduction

Puppet warping is an advanced way to create complex animations for characters and some objects with Wallpaper Engine. Puppet warping is a multi-step process that requires you to have a separate image layer with a cutout of the character or object you want to animate.

::: warning Before you get started
Puppet warping relatively complex feature, you can also create character animations with just [image effects](/scene/effects/overview) such as the [Shake effect](/scene/effects/effect/shake) which is a much simpler process.

Before you get started with puppet warping, you should have a basic understanding of [Timeline Animations](/scene/timeline/introduction) as the principles applied there are used to create the animations in puppet warping.
:::

In this tutorial, we will create a simple puppet warp animation using a samurai character that we have cut out of an existing background image using Photoshop. We have then retouched the original image to hide the already existing character from the image. If you are unable to work with a cutout of a character, puppet warping is likely not the right tool for you and you should instead rely on character animations using image effects.

## Puppet Warp Process Summary

<video width="100%" controls loop autoplay>
  <source src="/videos/puppet_warp_intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

All puppet warp animations consist of multiple steps which you can see in the preview video above. We will discuss all steps performed in Wallpaper Engine in this tutorial in detail:

1. Creating and importing a character cutout that is suitable for puppet warp.
2. Establishing the geometry of the character.
3. Creating the skeleton of the character.
4. Creating the limbs of the character.
5. Animating the character.
6. Placing the character in the scene.

### 1. Creating and importing a character cutout

Puppet warping requires a clean image cutout with transparency around the character model. We used *Adobe Photoshop* for this task but you can achieve similar results with free software such as *Paint.NET* and *GIMP* for example. We first cut out our samurai character from the [base image](/img/puppet-warp/samurai_4k.png). We then cleaned up the base image by painting over the existing samurai and removing him from the picture altogether, resulting in a [base image without the character](/img/puppet-warp/cyberpunkbg.png). You can see we did not necessarily do a perfect job with the removal but since we will place the samurai back to where it was, the imperfections are hardly noticeable in the final wallpaper as it will be mostly hidden by the same character again. You can obviously also use a character from one image and place it on an entirely separate background if you would like.

The main character cutout we imported into Wallpaper Engine was the following image file:

![Samurai Cutout](/img/puppet-warp/samurai_simple.png)

If you would like, you can take the character file and the [base image without the character](/img/puppet-warp/cyberpunkbg.png) and follow along with this tutorial.


## 2. Establishing the geometry of the character

Once your character cutout is ready, import it into your Wallpaper Engine project and select it. Scroll down on the right-hand side until you reach the **Puppet warp animation** section and click on **Edit Puppet Warp**. Wallpaper Engine will now present you with the steps necessary to create an animation with puppet warping. The first step is to create the geometry of your character. By clicking on the **Create** button below **Geometry**, Wallpaper Engine will establish a mesh of your wallpaper. You can increase the number of subdivisons on the mesh using the **Subdivision** slider and you can add more or remove padding from the object if needed. You can also indicate if the object has any holes. For this tutorial, we leave all these settings as they are but you may want to experiment around with your specific object to see if changing any of the values increases the accuracy of the generated mesh. The *3D Perspective Extrusion* settings are also reserved for a more advanced tutorial.

### Adding slices to the geometry

While viewing the *Geometry* section, you clicking anywhere with your mouse will add additional slices. Be sure to not accidentally add any unintended slices, you can always select and remove them using the *Remove Selected Slices* button at the bottom. For our Samurai model, we add a few slices below the hat of the samurai character to help Wallpaper Engine understand that the hat is one consistent object, this will make it a bit easier to animate the head later.

Watch the following video to see how we create the geometry for our object and add the additional geometry slices to the hat:

<video width="100%" controls>
  <source src="/videos/puppet_warp_geometry.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>