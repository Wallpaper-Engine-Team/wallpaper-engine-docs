# Particle System Sprite Sheets

Particle systems allow you to make use of sprite sheets in two different ways. You can either use them to create animated particle sequences or you can use each individual sprite image as a randomized particle texture. In this guide, we will cover both cases.

## Animated Image Sequence

In this guide, we will create an animated explosion for a single particle using a sprite sheet sequence. You can follow along by using this sample sprite sheet:

<img alt="Explosion Animation Spritesheet" src="/img/assets/explosion_spritesheet.png" width="75%" style="margin: 0 auto;display: block;">

The sprite sheet has a resolution of 1025 x 1025 pixels. Since it has 5 rows and 5 columns, it means each sprite is exactly 205 x 205 pixels in size. **It is crucial that the total resolution of the sprite sheet is divisible by the number of sprites**, always ensure that this is the case, otherwise you may experience jittery animations or other visual artifacts.

To import your sprite sheet into a particle system, simply drag and drop the texture into the **Albedo** texture in the **Materials** section of your particle. An import window will appear, now make sure to enable the **Sprite sheet** option. You will be further prompted to enter the width, height, number of frames. There is also an option to configure the duration, however, in the context of particle systems, this has no effect, as explained further down below.

Next, we move back to the **Material** section of our particle and set the **Blending** option to fit our particles the best. In this particular example, **Translucent** fits best but it may be different for whatever particle you are going for, simply try all the available options if you are unsure.

After your sprite sheet has been imported, move on to the **Lifetime random** emitter of your particle system and adjust the lifetime. The entire particle animation will always be stretched out across the lifetime of each individual particle. In our example, we set the **Min** and **Max** lifetime both to `1` second. You can immediately see that the animation plays much faster, as it is automatically adjusted to fit into the 1 second lifetime of the particle.

By default, Wallpaper Engine particle systems have their animation mode set to **Sequence**. If your particles are not playing the animation, verify that **Animation mode** is set to **Sequence** in the **System** settings in the **General** section.

The sprite sheet setup is now done, you can now continue with the rest of your particle system configuration.

<video width="75%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_sprite_sheet_sequence.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Randomized Particles

The second type of particle sheet consists randomized particles, where each particle is assigned one of the sheet particles. As an example, we will create a particle system that consists of multiple space ships using this simple sprite sheet:

![Space Ships](/img/assets/space_ships_spritesheet.png)

The final result may look like this where sprite sheets move along the screen:

<video width="75%" style="margin: 0 auto;display: block;" controls autoplay loop>
  <source src="/videos/particle_sprite_sheet_random_preview.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

To get started, we first import our sprite sheet into the **Albedo** texture in the **Materials** section of our particle system. The sprite sheet has a resolution of 500 x 86 pixels. Since it has 1 rows and 5 columns, it means each sprite is exactly 100 x 86 pixels in size. **It is crucial that the total resolution of the sprite sheet is divisible by the number of sprites**, always ensure that this is the case, otherwise you may experience jittery animations or other visual artifacts.

To import your sprite sheet into a particle system, simply drag and drop the texture into the **Albedo** texture in the **Materials** section of your particle. An import window will appear, now make sure to enable the **Sprite sheet** option. You will be further prompted to enter the width, height, number of frames. The duration is not needed in this use-case.

After doing this, you should now see each particle cycle through each individual frame of your sprite sheet. This sequence behavior is not what we want in this section. To change it, switch to the **System** settings of your particle system and change the **Animation mode** to **Random frame**. After doing this, you will notice that each particle will now render just one frame of your sprite sheet. To finalize our sprite sheet, we switch back to the **Materials** tab and adjust the **Blending** option to what fits best to your specific example. In the case of our spaceships, we change this option to **Translucent**.

The particle system is now ready for further configuration, you can see the process up until here in this video:

<video width="75%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_sprite_sheet_random.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Sprite Trail Renderer

You may have notice that the spaceships are not following the direction of their movements. To fix this issue, we can remove the standard **Sprite** renderer and replace it with the **Sprite Trail** renderer. This will point each particle in the direction that it moves. Since our particles are normal static objects (instead of laser beams or anything that may morph its shape under speed), we also have to adjust the **Length**, **Max length** and **Min length** of our **Sprite Trail** renderer to a value of `1`.

After making this change, you will notice that your objects will face in the direction of movement. Make sure your sprite particles face upwards, as this is the reference that Wallpaper Engine uses for the Sprite Trail renderer.

We further adjust the **Alpha fade** operator to a fade-in time of `0.0` and a fadeout-time of `0.9`. This disables the fade-in time and minimizes the fade-out time. This is optional and you may need to adjust it to your specific use-case. We do not need a fade-int time since we want our particles to spawn outside of the screen.

Additionally, we change the velocity of our particles so that all particles fly in the upper right corner. This is achieved by setting the **Speed min** and **Speed max** on the **X** axis to `300` and `500` respectively. We adjust the values to `300` and `400` on the **Y** axis.

Next, we move our particle system off the screen in our wallpaper. You can see this process in the following video:

<video width="75%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_sprite_sheet_random_spritetrail.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>