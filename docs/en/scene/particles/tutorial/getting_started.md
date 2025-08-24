# Getting Started with Particle Systems

In this tutorial, we will introduce you to the particle editor by creating a sample particle system that touches on all different parts that make up particle systems in Wallpaper Engine. This will give you a good idea of what you can achieve with the particle editor. However, since the particle editor is all about highly custom and creative solutions, it merely serves as a starting point. Once you complete the tutorial, you should experiment with the different features the editor offers to see what you can really do.

This tutorial we will build a simple particle system of interactive ember particles that have the following features:

* They spawn on the left-hand side across the height of the screen.
* They move from left to right in varying speeds.
* They are colored in varying shades of red.
* They interact with the mouse.
* They spawn a little explosion as a child particle system when they are removed. 

## Creating a new Particle System

There are two ways to get started with a particle system:

1. Use the particle system template
    * To do this: Click on **Add asset** on the left-hand side of the editor, then scroll down to the **Renderables** section towards the bottom of the list and select **Particle System**. Give your particle system a name on the right-hand side and confirm. The particle editor now opens and you are ready to get started.
2. Use an existing particle system asset as a starting point
    * Alternatively, you can add any existing particle system as a starting point. Click on **Add asset** on the left-hand side of the editor and select any particle-based asset to the wallpaper. Most standard assets are really just particle systems, for example, the **Fireflies** asset might be a suitable starting point for this tutorial. After adding it to your wallpaper, select the layer in the editor and on the right-hand side, click on the **Edit** button in the particle system section.

In this tutorial, we will use the first option of starting with a blank particle system template. You should now see the following particle template with the white circular objects floating around:

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_overview.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Creating particle systems does not require you to follow any steps in a particular order. In this tutorial, we will work our way from the top to the bottom of the particle system components, though in a more real scenario, you are more likely to jump between components and tweak them on the fly.

## General

The general section allows you to define some fundamental features of the particle system that affect the overall look of the particles themselves, including the particle texture.

For a full list of all settings, take a look at the reference guide for the [General](/en/scene/particles/component/general.html) component.

### Choosing a texture for our particle system

We will start by setting a new texture for our particles. Wallpaper Engine allows you use either a standard image-based texture for your particles, alternatively you can also create a spritesheet for animated particle textures or to include multiple textures in one particle system:

* [**Particle System Sprite Sheets**](/en/scene/particles/tutorial/spritesheet.html)

In this tutorial, we will keep it simple and just change the texture to another prepackaged texture. In the **Material** section, click on the **Browse** button next to the **Albedo** texture and select an alternative texture for your particle system. We choose `halo_4.text` but you may choose any other texture or import your own texture by dragging it into the particle editor window.

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_albedo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Defining the max particle count

Next, we move on to the **System** settings, here we can choose the maximum number of particles. Keep in mind that more particles always means that the load on the system will get higher, so try to keep the number as low as possible. For our sample wallpaper, we stick to maximum number of 500 particles.

## Renderers

The standard particle system comes with the **Sprite** renderer which is the default for most particle systems. It means that each particle is rendered as a simple image. For other scenarios, you may want to choose a different renderer.

For a full list of all renderers, take a look at the reference guide for the [Renderer](/en/scene/particles/component/renderer.html) component.

## Emitters

Next, we need to define an **Emitter**. The emitter you choose determines the spawn behavior for new particles. This mainly entails their spawn location, their speed and any initial speed and direction. You can also make emitters audio-responsive, meaning that particles are only spawned when music is playing.

In this tutorial, we stick with the default **Sphere random** emitter which spawns the particles in a circle around the center of the particle system. Since we want our particles to spawn in a straight vertical line, we need to do some minor changes to the emitter.

First, we set the **Directions** value to X: `0`, Y: `1`, Z: `0`. This means that particles will only spawn across the **Y** axis and not in a full circle anymore, since we set the **X** axis to `0`.

Secondly, we set the **Distance min** value to `0` and the **Distance max** value to `540`. This ensures that particles will be spawned across the entire height of a Full HD screen when the particle system is centered. (Full HD is 1920 x 1080 pixels, half of `1080` is `540`). For a 4K (3840 x 2160) wallpaper project, you may want to set this value to `1080` since half of `2160` is `1080`.

You can see this process and the visual result in this video:

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_emitter.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

For a full list of all emitters and their configurations, take a look at the reference guide for the [Emitter](/en/scene/particles/component/emitter.html) component.

## Initializers

In this component group, you can configure certain features of your particles at their time of creation. For example, you can define their lifetime, size, initial speed and color. These values will not change unless you modify them later using an **Operator** (more on that in the next section).

### Defining the particle speed and direction

First, we take a look at the **Velocity random** initializer. This initializer lets us define a random speed that falls in a pre-defined range. Since we want our particles to move from the left-hand side to the right-hand side of the screen, we need to define a relatively high speed on the **X** axis. To achieve this, we first set **Speed max** on the **X** axis to a relatively high value of `500`.

Most particles will now fly at high speeds towards the right corner of the screen. However, the **Speed min** value is still set to a negative value which is why **some** particles will fly to the left-hand side at a low speed. If we set this value to `0`, this means all particles will get a random speed between `0` and `500`. This is not desirable either, since some particles will be at a (near) standstill. We settle on a medium value of `300` for the **Speed min** on the **X** axis. Since we do not want our particles to move up or down at all, we set both **Y** values to `0`.

If we close the particle editor now and move the particle system to the left outer edge of our wallpaper, we can observe the particles flying from left to right across our wallpaper.

See this process visualized in the following video:

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_init_velocity.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Defining the particle lifetime

After defining the particle speed, you may notice that particles do not fully reach the right side of the screen most of the time, their lifetime simply ends before they reach can reach the right edge of the screen. To fix this, we select the **Lifetime random** initializer and slightly increase the minimum lifetime to `4` seconds and the maximum lifetime to `6` seconds.

It is important to always keep the lifetime values as low as possible so that particles that have long left the screen do not waste system resources:

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_init_lifetime.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Defining particle colors

Since we want our particles to resemble the embers of a flame, we need to adjust their coloring to fit this description. We select the **Color random** initializer and set a color range that we want to be applied to all particles. In this case, we choose a two shades of red and orange. Wallpaper Engine will automatically assign a color of this color range to each particle, resulting in slight variations between particles.

You are free to choose any color range here. You can also **delete** the **Color random** initializer and **replace it** with the **HSV color random** or the **Color list** initializer which let you define colors ranges in different ways.

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_init_color.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Additional initializers

In many cases, you also want to adjust the **Size random** initializer to spawn varying sizes of particles. There is a handful of additional initializers that allow for complex setups that we are not covering in this basic tutorial, we suggest you give them a try and see what you can achieve with them.

For a full list of all initializers and their configurations, take a look at the reference guide for the [Initializer](/en/scene/particles/component/emitter.html) component.

## Operators

The final main component group of each particle system are the operators. These components alter the particles during their lifetime in some way. For example, they may change the color, size or speed over time. This is opposed to initializers which set a fixed value once when each particle is created.

For a full list of all operators and their configurations, take a look at the reference guide for the [Operator](/en/scene/particles/component/operator.html) component.

### Movement operator

By default, the **Movement** operator is always present in each particle system. **Without this operator, no movement of particles is possible which is why we recommend leaving this operator in place in the vast majority of cases.**

### Fading particles in and out

Each sample particle system comes with the **Alpha fade** operator. This operator fades particles in and out, which allows for a smoother appearance and disappearance of particles.

In our particular example, particles spawn outside the screen and we do not actually want them to fade in. However, we want them to fade out towards the end of their lifetime, just like real embers would. To achieve this, we select the **Alpha fade** operator and set the **fade-in time** value to `0`. This disables the fade-in entirely.

We also want to move the beginning of the fade-out to a bit later in the particle lifecycle, so we change this value to `0.8`. Keep in mind these values are percentages relative to the lifetime of each particle. A fade-out value of `0.8` means that particles start fading out once they reach **80%** of their life. **It does not represent seconds** but rather a percentage.

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_operator_alphafade.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


### Adding Turbulence

Currently, our particle movement does not look very organic, as particles only fly in a straight line from left to right. To improve this, we add the **Turbulence** operator to our particle system. This introduces random turbulences in the movement of each particle, mimicking random gusts of wind.

In the **Operator** section, click on the **plus icon** and add the **Turbulence** operator from the list. Once it has been added, you will immediately see its effect, as particles now move around with a turbulent force.

You may notice some particles start flying backwards, as the turbulent force acts in all directions. Since we only want our particles to have turbulent movements up and down, we set the **Mask** to `0` on the **X** axis. This causes the turbulence only to be applied on the **Y** axis, resulting in turbulent up and down movements only.

In addition, we tweak the **Speed min** and **Speed max** values by reducing them to `400` and `800` respectively. This slightly lowers the intensity of the turbulence. We recommend simply experimenting around until the values feel right to you.

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_operator_turbulence.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Mouse interactions with a control point

To make our particle system more interesting, we can also allow users to interact with it by adding the **Control Point Force** operator. **Control points** are reference points somewhere in your wallpaper or relative to your particle system's position. Each particle system has 8 control points (labeled `0` - `7`) and you can can use them in various initializers and operators.

In this section, we will use the **Control Point Force** operator. This operator acts with a pushing or pulling force on particles from a certain point in the wallpaper.

To get started, add the **Control Point Force** Operator to your particle system. The first thing you want to do is to change the **Control point** from the default value of `0` to a value of `1`. This is because control point `0` is a special control point that always represents the origin (the center location) of the particle system, no matter how you configure it. Since we want to attach a control point to our mouse cursor, we need to use control point `1` or higher for this.

Next, move over to the **Control Points** section at the bottom of the left-hand side in the particle editor. Select control point `1` (or whatever control point you configured in the operator) from the list and enable the **Lock to pointer** option. This attaches the control point position to the mouse cursor.

If you now hover over the previewed particle system in the particle editor, you should already notice that particles start interacting with your mouse cursor. However, the default behavior of **Control Point Force** pulls particles closer, we want to turn this around and push particles away. We can do this by changing the **Scale** value from a positive number to a negative number. In our case, we will enter a scale of `-500`. You can now observe particles being pushed away from the mouse cursor. You can further fine-tune this by adjusting the **Distance** value to change the range in which the force is active.

<video width="70%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_control_point.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Child Particle Systems (Advanced)

Child particle systems are very much optional and not needed for many particle system, we still cover it here with a simple example so that you get a rough idea of what they allow you to do. Child particle systems allow you to attach additional particle systems to your individual particles. You can choose between four types:

* **Static:** The child particle system will be statically spawned at the particle system origin.
* **Event follow:** The child particle system will follow individual particles.
* **Event spawn:** The child particle system is spawned alongside particles.
* **Event death:** The child particle system is spawned when a particle reaches the end of its lifetime.

In this tutorial, we will exemplify this using the **Event death** type, meaning we want to spawn a new particle system whenever a particle fades away. In our case, we want to create a very simple explosion, though child particle systems can be as complex as their parents. You can also use multiple child particle systems for more advanced visual effects.

The following video shows all the steps that will be described next. We recommend watching the video and reading the description to get an understanding of what is being done.

<video width="75%" style="margin: 0 auto;display: block;" controls>
  <source src="/videos/particle_getting_started_child_particles.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Creating the child particle system

First, we need to create a new particle system that we can use as a child particle system. In the particle editor, click on the new particle system button in the top left corner (symbolized by a single piece of paper) to get started. Give your particle system a memorable and unique name that is not used by any other particle system.

You will be presented with the standard sample particle system just like before. Remember, we want to just show one quick *explosion* per particle, so we need to adjust our child particle system to match that. To do this, we change the following settings:

* **General**
    * We set the **Max count** value to `1` in the system settings.
* **Emitters**
    * We change the **Distance min** and **Distance max** to `0` since we want our new child particle to spawn exactly where the parent particle died.
    * We set the **Rate** to `0` and the **Instantaneous** value to `1`. **This step is crucial.** A particle system with a rate of `0` and any higher **Instantaneous** value will spawn exactly that many particles before the particle system itself gets removed. In this case, we want one explosion, so a **Instantaneous** value of `1` is what we need.
* **Initializers**
    * We remove the **Velocity random** initializer entirely. We do not want our explosion to move away in a random direction, so the entire initializer is not needed in our case. If you followed all the steps up until now, you should now see a blinking white dot in your particle system preview.
    * We change the **Lifetime random** to a lower value range. We choose `0.5` - `0.6` but you may even want to choose a lower value depending on what works best for your design.
    * We remove the **Color random** initializer since we will implement a replacement for it in the next step.
    * We leave the **Size random** initializer untouched for now, it will be handled in the next step as well.

After performing these changes, you will now have a white pulsing blip particle system. The editor previews this as fast pulses but the preview essentially just recreates the entire particle system constantly due to the use of the **Instantaneous** in the **Emitter**.

What is missing is any relation to the parent particles, so we want to add the **Inherit initial value from event** initializer three times to our child particle system. This will copy a value from the parent particle and makes it available to the child particle system. Add this initializer three times and configure one of each initializers with these settings:

* **Set color:** Copies the exact color of the parent particles so that our explosion matches the parent particles exactly.
* **Set velocity:** Copies the movement speed and direction of the parent particles so that the explosion does not occur at a standstill. (Do note that any operators like turbulences are not copied, for a perfect child particle system you would probably want to add the turbulence operator to the child particle system as well.)
* **Multiply size:** Multiplies the size of the parent particle times the size of this particle. This ensures that our explosion is relative to the size of the parent particle. Since our parent particle system has differently sized particles, this helps to ensure that explosions do not seem comically huge or small relative to each particle. Since this is a multiplication, make sure to adjust the **Size random** initializer of this child particle system. In our case, we set the **Size min** and **Size max** values to `2` in the **Size random initializer**. This means the explosion is twice as large as the parent particle.

### Assigning the child particle

Our basic child particle system is now done. To assign it, use the dropdown menu at the top and switch back to your main particle system. **Please note:** The **Apply** button at the top assigns the entire particle system to the layer, do not press this button while on the child particle system.

In the **Children** section of your **parent particle system**, click on the add button. You will be presented with a list of all known particles systems, select the child particle system that you have just created from the list and confirm your choice.

Next, set the **Type** to **Event Death**, this will spawn the child particle system each time a particle dies. In our example, the particles will now disappear with a small explosion whenever they reach the end of their life. Do note that the explosion colors, size and movement match the parent particles due to the **Inherit initial value from event** initializer we used on the child particles.

Keep in mind there is a video of the entire process at the beginning of this section, please use it as reference should anything be unclear.