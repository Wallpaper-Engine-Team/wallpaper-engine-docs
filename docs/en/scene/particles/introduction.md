# Particle Systems Overview

Wallpaper Engine features a **particle systems editor** that allows you to create complex and even interactive particle systems and fine-tune them to your liking.

Particle systems consist of a large number of small images to build certain effects like fire, rain or moving objects like fallen leaves. You can control the image rendered on the sprites, how they are created and how they move. You can even interact with them using your mouse and they can also be made audio-responsive.

<video width="65%" style="margin: 0 auto;display: block;" controls loop autoplay>
  <source src="/videos/particle_system_editor.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Wallpaper Engine allows you to build upon existing particle systems that come pre-installed in the editor or start completely new particle systems from the ground up. In this documentation, we explain how particle systems are built and which components make up a particle system, we will show-case this with a few examples.

## Getting Started with the Particle Editor

In the section below, you can find an overview of all the components that make up a particle system if you want to look into the specifics of a component. To get started with the editor, we recommend working through the **Getting Started** tutorial which introduces you to all the components with a sample particle project:

* [**Getting Started with Particle Systems**](/en/scene/particles/tutorial/getting_started.html)

While particle systems are also a good use-case for sprite sheets, allowing you to either create animated particles sequences or to use multiple textures within one particle system. If you want to learn more about how to utilize sprite sheets, take a look at our sprite sheet tutorial:

* [**Particle System Sprite Sheets**](/en/scene/particles/tutorial/spritesheet.html)


## Particle Systems Components

Each particle system consists of different components that control certain characteristics of your wallpaper. Especially if you are just starting out with particle systems, it may make sense to open the documentation while configuring your particle system so that you know what each setting does.

| Component            | Description   |
|----------------------|---------------|
| 1. [General](/en/scene/particles/component/general.html) | Defines how the particle is rendered to the screen, which texture is used and how many particles are spawning. |
| 2. [Renderers](/en/scene/particles/component/renderer.html) | Lets you choose a renderer for your particles which defines how the particle textures are rendered. |
| 3. [Emitters](/en/scene/particles/component/emitter.html) | Defines when and how new particles are created. |
| 4. [Initializers](/en/scene/particles/component/initializer.html) | Defines properties of your particles at the time of your creation, for example their size, speed and color. |
| 5. [Operators](/en/scene/particles/component/operator.html) | Operators apply changes to properties of particles over time. Uses the **Initializer** values as a starting point. |
| 6. [Child Particle Systems](/en/scene/particles/component/children.html) **(Optional)** | Child particle systems are completely separate particle systems that are attached to your current particle system. You can spawn these at different times. |
| 7. [Control Points](/en/scene/particles/component/control_point.html) **(Optional)** | Control points are special points in the particle system or your wallpaper that you can interact with, including your mouse cursor.|
