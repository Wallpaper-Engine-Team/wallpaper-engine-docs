# Bone Physics Simulation

Wallpaper Engine also allows you to configure certain physics simulations for the puppet warp bones. When selecting a bone, you click on **Bone Constraints** to configure these properties of your bones. In this guide, we will explain what each individual option does and show you an exemplary use-case. Scroll down to the bottom of this page to see a detailed explanation of all bone constraint options.

::: warning
Keep in min that the physics simulations can slightly change their behavior depending on the max FPS settings of your users. The Wallpaper Engine editor will always render at a high frame-rate. You can apply your wallpaper to the desktop and set a low FPS limit of 15 in the Wallpaper Engine settings to see how the wallpaper performs under stricter FPS rules.
:::

## Bone Physics Example

We will us the Samurai example from the [Puppet Warp Character Sheet Guide](/scene/puppet-warp/charactersheet) to showcase two different types of implementations of bone physics.

### Rope Physics

In our first example, we will add physics simulation to the rope attached to the sword of the samurai character that we have used in the other puppet warp guides:

<video width="100%" controls autoplay loop>
  <source src="/videos/puppet_warp_rope_gravity.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

To do achieve this, we open up the **Skeleton** step of the puppet warp and select the bone which connects the samurai's hand and the root bone at the bottom of the rope:

![Character Sheet Weights](/img/puppet-warp/puppet_warp_gravity_bone_inactive.png)

We then click on the **Edit Constraints** button on the right-hand side to open the **Bone Constraints** menu. In this case, we enable the **Rigid simulation** option and configure it as follows:

* **Physics rotation:** Enabled - *We want the bone to be able to rotate as visible in the preview video above.*
* **Rotational friction:** 12
* **Rotational inerta:** 20
* **Physics translation:** Disabled - *We don't want the bone to move.*
* **Gravity enabled:** Enabled - *We want gravity to pull the rope downwards.* 
* **Tip mass:** 20
* **Gravity direction:** 90 - *A value of 90 means the gravity is pulling downwards.*
* **Tip forward angle:** 90 - *The forward angle should point in the same direction as the gravity.*
* **Limit rotation:** Enabled - *Set it to -180 and +180 to ensure prevent any excessive rotations.*

You will also notice that the forward angle becomes visible in the bone preview, visualized by the brown line with the circle at the end, make sure it points in the correct direction (in this case: the direction of gravity).

![Character Sheet Weights](/img/puppet-warp/puppet_warp_gravity_bone_active.png)

This is all that it takes to enable the physics for the rope bone. You do not actually need to animate the bone itself, but rather you should animate the parent bone (in this case the hand) and the bone will dynamically follow along and simulate the physics. You may need to tweak the values from above for your example, it's not possible to provide you with values that will work in all cases but you can use the values from above as a baseline and then tweak them to your specific use-case.

### Cape / Cloth Physics

TODO

## Bone Constraints 

When you select a bone in your puppet warp skeleton, you can click on **Bone Constraints** to see advanced options for a particular bone.

You have two main options that you can decide between at first:

* **Spring simulation**: Enables bouncy simulation of the bone. The bone will act like a spring and always try to return to its default position.
* **Rigid simulation**: Enables drag simulation of the bone. The bone will act as a body that can be dragged around and it will keep its last position.

You can use a combination of these, for example, the first bone of a physics-simulated object may use the spring simulation while the rest may use the rigid simulation. The exact outcome of these simulation changes are difficult to summarize in words and we suggest you simply play around with these settings until you get a feeling for how they influence the simulation.

### Bone Constraint Options

* **Physics rotation**: Enables dynamic simulation for the rotation of the bone. This is useful for most cases
* **Rotational stiffness (spring only)**: How strongly the bone will attempt to return to its default rotation, think of the stiffness of a spring. Increasing this makes it very bouncy.
* **Rotational friction**: How much rotational movement is reduced with every frame. You can increase this to reduce jittery movement.
* **Rotational inertia**: This reduces how much of an effect animation movement has on the bone. Increasing this will make the bone less reactive to fast animations.
* **Physics translation**: Enables dynamic simulation for the position of the bone. This is useful if distortion of the object is the goal of the animation or if the object is separated into different spaces.
* **Translational stiffness (spring only)**: How strongly the bone will attempt to return to its default position, think of the stiffness of a spring. Increasing this makes it very bouncy.
* **Translational friction**: How much translational movement is reduced with every frame. You can increase this to reduce jittery movement.
* **Translational inertia**: This reduces how much of an effect animation movement has on the bone. Increasing this will make the bone less reactive to fast animations.
* **Max distance (translation only)**: This limits the maximal distance the bone is allowed to move.
* **Gravity enabled**: Enabling this will make the bone react to gravity. It will attempt to move towards the direction of gravity as if it was suspended in air.
* **Tip mass**: A higher mass will make the bone react more strongly to gravity instead of movement from the animation.
* **Gravity direction**: This is the direction of gravity.
* **Tip size**: This lets you override the distance between the simulated weight of the bone and the center of the bone. A greater size will make the bone less reactive to certain animations, while a smaller size will make it more reactive. If you leave it at 0 and the bone has exactly one child bone, the size is dynamically set to match the distance to the child. Setting this value to anything other than 0 will override the size. You can see the size in the editor by looking at how far the orange circle is from the bone you just edited.
* **Tip forward angle**: This lets you override the angle of the tip. By default the tip will face the direction towards the child bone, if there is one, otherwise it will face the default forward direction of the bone, along the **X** axis. You can change this direction in either case with this option. This option applies an offset to the current direction.
* **Limit rotation**: Using this option allows you to limit the maximal rotation of the bone in either direction. This can be useful to *steer* the bone into the desired direction and prevent it from rotating 180 degrees.
* **Min angle**: The minimal angle of the allowed rotation. By default this is -180 degrees.
* **Max angle**: The maximal angle of the allowed rotation. By default this is 180 degrees.
* **Limit torque**: Enabling this option allows you to limit the maximal rotational force applied to the bone. You can use this option to prevent the bone from spinning erratically due to very fast animations.
* **Max torque**: The maximal allowed force, any forces greater than this will be limited to the maximal value.
