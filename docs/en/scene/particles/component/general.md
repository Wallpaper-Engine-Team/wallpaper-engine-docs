---
prev: ../introduction.md
---

# Particle Component - General

The **General** component of a particle system defines how the particle is rendered to the screen and which texture is used. It consists of three sections:

[[toc]]

## Material Settings

### Cutout

Cuts off all alpha channel values outside of the defined range based on the provided **cutout start** and **cutout end** values and then sets a target opacity.

* **Cutout start:** The new start range of the transparency.
* **Cutout end:** The new end value of the opacity. Must be higher than **Cutout start value**.
* **Cutout opacity:** The desired target opacity for the particles which is applied after the range has been readjusted.

To further exemplify: Initially, the full opacity range is always between `0.0` and `1.0`. By setting the **cutout start** to `0.2` and the **cutout end** to `0.8`, all alpha values outside of this range are discarded. In the next step, all values inside the defined range are re-arranged to the full range of `0.0` to `1.0`. Finally, the **cutout opacity** is applied to fine-tune the desired output opacity of the particles. Keep in mind that this is being affected by the per-particle alpha value, so it allows you to effectively use the texture alpha channel as a ramp with your given cutout interval.

### Lighting

Enables real-time lighting using [light sources](/en/scene/lighting/introduction.html) for the particle system. When enabled, you can also add a normal map to the particle system that will determine the lighting.

#### Double-sided lighting

When enabled, both sides of the particle will render the lights. This is mostly useful for 3D wallpapers.

### Refract

When enabled, you can add a normal map which Wallpaper Engine uses to add a refraction effect to your particles.

### Textures

#### Albedo Texture

The main texture used by this particle system. You can also import a sprite sheet to create animated textures or spawn particles with individual textures. Be sure to read our [Particle System Sprite Sheet Tutorial](/en/scene/particles/tutorial/spritesheet.html) if you want to learn more about how to utilize sprite sheets in your particle systems.

#### Normal Map Texture

**Optional.** This texture is only visible when you enable the **Refract** or **Lighting** option. You can import a normal map here which Wallpaper Engine will use for a refraction or lighting effect.

### Shader Settings

#### Overbright

Allows you to adjust the brightness of your particle system. If you intend to raise the brightness, try enabling the [Bloom Effect](/en/scene/effects/bloom.html) on your wallpaper instead, especially *HDR Bloom* can achieve higher quality results than increasing the *Overbright* value.

#### Refract Amount

**Optional.** This option is only visible when you enable the **Refract** option. Controls the strength of the refraction effect.

### Rendering Settings

#### Blending

Depending on what type of content your particle system holds, choosing the correct blend mode is important. You can choose between **Additive**, **Translucent** and **Normal** blending.

::: details Click here to compare the three blend modes

<video width="100%" controls loop>
  <source src="/videos/particle_system_blending.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

:::

## System Settings

### Max Count

Controls the maximum number of particles allowed to be spawned. This directly controls how much memory is allocated by the particles. Always set this value as low as necessary for your particle system to function, this can greatly increase performance and reduce memory usage.

### Start Time

Will pre-simulate the particle system for a certain amount of time when it is created. This is helpful to avoid the screen from looking empty, it will kick off the system as if it has already been running for the configured time (in seconds). The higher this number is, the longer it will take to simulate, since it is based on a real-time simulation.

### Worldspace

If this option is enabled, particles will ignore the position and rotation of the particle system after they have been created. This means spawned particles will ignore the position of the particle system and instead only rely on their own position.

This can be useful if you want to attach a particle system to another object, animate the particle system position / rotation with a timeline animation or via SceneScript.

**Please note:** Keep in mind that the **Gravity** option in the **Movement** operator is affected by this option and might lead to movement behavior that you are not intending. Do **not** purely rely on the **Gravity** option to create motion.

### Perspective rendering

Perspective rendering is relevant in 3D contexts. For 3D-based wallpapers, this option is always on. In 2D scenes, you can optionally turn it on to add depth to the particle system. This can be very impactful, you can compare the **Snow perspective** and **Snow flat** assets to see what this option can do.

### Disable color overrides

Disables all color overrides that are applied to the layer.

### Disable count overrides

Disables all count overrides that are applied to the layer.

### Disable lifetime overrides

Disables all lifetime overrides that are applied to the layer.

### Disable size overrides

Disables all size overrides that are applied to the layer.

### Disable speed overrides

Disables all speed overrides that are applied to the layer.


### Sprite sheet - Animation mode

Changing this mode either spawns a random frame of your sprite sheet or plays the sprite sheet in sequence.

### Sprite sheet - No frame blending

Disables the smooth blending between frames.

### Sprite sheet - Sequence multiplier

This determines the speed at which the sprite sheet sequence is played.

## Viewport Settings

**The viewport settings are only relevant for the preview screen that you see in the particle system editor.**

### Show Stats

Shows the number of particles in the upper right corner. Useful to determine the upper limit for the **Max Count** setting in the **System Settings** of your particle system.

### Show Axis

Renders a horizontal and vertical line in the preview screen to help you navigate the particle preview.

### Color

Allows you to change the color of the preview screen to test your particles on different backgrounds.