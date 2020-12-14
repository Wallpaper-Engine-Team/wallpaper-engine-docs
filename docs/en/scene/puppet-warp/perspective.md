# 3D Perspective Extrusion

With puppet warping, you can also simulate a 3D perspective of 2D images. We will use the samurai from our [Character Sheet Example](/scene/puppet-warp/charactersheet) to showcase an example of this. It is not necessary to use a character sheet, however. You can also use a standard model for this purpose and achieve similar results.

First, you need to enable **3D Perspective Extrusion** in the **Geometry** step of the puppet warp. You can fine-tune the *scale*, meaning the perceived depth of the 3D effect using the slider. You can further also add or remove smoothing to the 3D extrusion. Values that are too strong for either option may result in an unrealistic appearance and you will need to fit the effect to your specific use-case. You can preview the extrusion by moving the *Extrusion preview* slider - this has no effect on the object itself and is only a preview that will be discarded later. You can see a video of this with our example file here:

<video width="100%" controls>
  <source src="/videos/puppet_warp_extrusion.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Adding 3D perspective effect to an animation

In order for the effects of a 3D extrusion to become visible, you will have to animate the **X** or **Y** axis of the *angles*. In our example, we only take the first bone with animations after the root bone and animate the **Y** axis of the angles up and down a few times during the animation, in order for the character to appear as if it is continuously turning left and right. Keep in mind that the order of bones matters, if you want the whole body of your character to turn, it's likely a good idea to add this to the first bone with animations.

::: tip
Animating the **Y** axis will make the movement appear left / right and animating the **X** axis will make the movement appear up / down.
:::

We select the bone and hide all properties except the *Angles Y* option. The angle Y keyframe starts at a value of 0, then transitions to *-15* a few frames later, followed by transition to an angle of *+15 before circling back to an angle of *-15* again. The animation ends where it started at a value of 0. This already suffices in our example to create the perception of left and right movement. You can see this process and the final result in the following video:

<video width="100%" controls>
  <source src="/videos/puppet_warp_extrusion_animation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Alternative ways of utilizing perspective

Alternatively to actually animating the perspective, you may also find it useful to simply enable the **Perspective** option at the bottom of you layer, in the *Miscellaneous* section. This will enable the 3D extrusion at all times and might not fit your model very well, but you can experiment around and see if it works well in your specific case and tweak the strength of the 3D extrusion.
