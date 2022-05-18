# Limb Animations with Inverse Kinematics

Wallpaper Engine supports inverse kinematics animations for puppet warp models. This approach allows you to define sensible movement ranges for a character's joints and Wallpaper Engine will dynamically animate the movement of entire limbs.

You should have read and understood the [Puppet Warp Introduction Guide](/scene/puppet-warp/introduction) before attempting this tutorial.

## Basic Introduction to Inverse Kinematics

We generally recommend using [character sheets](/scene/puppet-warp/charactersheet) when using inverse kinematics for the best visual result. However, you can also use inverse kinematics for simple puppet warp animations. For this introductory guide, we will use a simple stick figure to explain the core idea of inverse kinematics in its most basic form.

### Creating Bones for Inverse Kinematics

In order to get started with inverse kinematics, start creating the geometry for your puppet warp layer as you would with any ordinary puppet warp animation. The first important part for inverse kinematics comes in the skeleton setup where you need to specify the bones of your model.

In our example, we have a simple stickman figure that we use to showcase a basic inverse kinematics setup. We start by placing the **root bone** in the torso area. We now extend from the torso to the hip joints of our character at the top end of the legs. Make sure that each leg gets an individual bone, this is important because both legs need to be able to move independently. We follow this up by creating a bone at the knees and the feet.

Now repeat this by creating a bone in the upper chest area. Extend from this bone to the left and righter shoulder and extend to the arm joints and hand joints.

Add any additional bones that may be necessary for your character, such as a head bone.

### Enabling Inverse Kinematics

Inverse kinematics is only enabled for the last bone of each respective limb. For example, for an arm, you would select the last hand bone and for a leg, you would select the bone that represents the foot. Select these last bones and click on **Edit Constraints** on the right-hand side. From the **Simulation preset** option, select **Inverse kinematics arm / leg**. You may further tweak this by changing the **Mode** option to **Advanced**, though in many cases it should be fine to just use the simple version. You can further adjust this at a later time.

Watch the skeleton setup in the following video:

<video width="100%" controls loop>
  <source src="/videos/ik_bones.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Adjusting the Forward Position

After your inverse kinematics limbs have been configured, you need to make some additional tweaks to the inverse kinematics bones, otherwise you may experience unusual movements and flailing of individual limbs.

In the puppet warp skeleton settings, select the inverse kinematics bones of your character and move the **Angle** alignment so that the **red arrow faces the direction of the limb**. For example, in our case we turn the angle so that it faces the direction of the hands. Repeat this process for all relevant limbs as shown in the following video:

<video width="100%" controls loop>
  <source src="/videos/ik_angle.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Basic Inverse Kinematics Animation Sample

Now that we have finished our basic puppet warp setup, we can create an animation for our character model. Create a new animation and configure a desired animation length. Since we will showcase a looped animation, we also enable the **Wrap loop frames** option. This allows us to create complex animations and Wallpaper Engine will always let all parts of the animation finish where they started for a smooth animation loop.

In our example, we grab the root bone of our character and drag it lower, this will cause our character to animate the legs and arms into a squatting position. We then move the timeline slider to the center of the animation timeline. Again, we do not move the slider to the end because we enabled the **Wrap loop frames** option, so Wallpaper Engine will finish the rest of the animation for us and we do not need to define the end position again. We now move the root bone of our character upwards and this will automatically move all inverse kinematics limbs in a *sensible* way. We can now play our simple jump animation, watch the full process in this video:

<video width="100%" controls loop>
  <source src="/videos/ik_simple_animation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Adjusting orientation controllers

You may have noticed that Wallpaper Engine will show you additional points leading to the center of your limbs with inverse kinematics. These so-called orientation controllers decide what direction a limb will twist. You can reposition them to adjust at which point a limb will twist in the corresponding direction. You can do this before starting your animations but you can also move them during the animation itself. Watch the following video to get an idea of how orientation controllers change the behavior of the inverse kinematics animation:

<video width="100%" controls loop>
  <source src="/videos/ik_orientation_controller.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>