# Interactive Puppet Warps

Puppet Warping in combination with *SceneScript* can also be used to create interactive wallpaper elements. In this tutorial, we will discuss how to allow users to grab and drag around individual bones.

## Interactive bones

To get started, we start with a simplified example of having an object with one bone that users can drag and release.

TODO

<video width="100%" controls loop>
  <source src="/videos/puppet_warp_interactive.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Advanced interactions

We have also created a much more complex example of this in a separate project. In this case, the jelly has a large number of bones which can all be dragged around. Additionally, it includes a timeline animation which is triggered by SceneScript whenever the mouse is released to simulate the physical impact of the bone returning to its original state (see the impact jiggling in the video below). The jelly texture has also been made into a sprite sheet with multiple facial expressions which are switched around when the dragging animation starts. The example also includes sounds

* [Click here to download the advanced jelly project.](/samples/jelly_advanced.zip)

You can see the advanced example in action in the following video:

<video width="100%" controls loop>
  <source src="/videos/puppet_warp_interactive_advanced.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
