---
prev: ../introduction.md
---

# Particle Component - Renderers

Your particle system needs at least one renderer to function. There are four different types of renderers available:

[[toc]]

Each renderer comes with two standard options:

* **Orientation:** This option changes how particle sprites are oriented towards the screen.
  * **Screen:** The default option, particles always face the user's perspective. Almost always the correct choice for 2D scenes.
  * **Upright:** Mainly for 3D scenes. Orients the particles upright towards the screen.
  * **Fixed:** Mainly for 3D scenes. Aligns the particle system along an axis. For example, if you want the particles to appear flat to the ground in a 3D scene like rain drop impacts, you can set it to `X: 0 Y: 1 Z: 0` (values represent a vector).
* **Worldspace:** By default this option is disabled and the orientation of the particles is tied to the particle system. When enabled, the orientation of particles will be independent of the orientation of the particle system. Mostly relevant when **Orientation** is set to **Upright** or **Fixed**. Not to be confused with the **Worldspace** option in the [General](/en/scene/particles/component/general.html#worldspace) particle system settings.

## Sprite Renderer

This is the **default** renderer that is relevant in most cases. It simply renders your particles to your screen with the configured orientation.

<video width="90%" style="margin:0 auto;display:block;" controls loop autoplay>
  <source src="/videos/particle_renderer_sprite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Sprite Trail Renderer

This renderer will stretch your particles depending on their velocity.

* **Length:** The length is multiplied with speed and determines the ideal length of the particle.
* **Max Length:** The maximum length a particle can reach at very high velocities.
* **Min Length:** The minimum length a particle can reach at low velocities.

<video width="90%" style="margin:0 auto;display:block;" controls loop autoplay>
  <source src="/videos/particle_renderer_sprite_trail.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Rope Renderer

This renderer draws a line between each particle that is spawned.

* **Subdivision:** The number of subdivisions in each line. Higher numbers makes corners smoother at the cost of system performance.
* **UV scale:** Changes how often the texture is repeated. Make sure clamping is disabled when importing the texture, otherwise the particle will be cut off.
* **UV smoothing:** Recommended to be enabled, reduces flickering in many cases. Only has an effect when lifetime of all particles is exactly the same (see **Initializer** for this), otherwise it is automatically disabled. No effect when *UV scrolling* is enabled.
* **UV scrolling:** When enabled, the texture moves along the particles. Good for any type of stream (for example water).

<video width="90%" style="margin:0 auto;display:block;" controls loop autoplay>
  <source src="/videos/particle_renderer_rope.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Rope Trail Renderer

This renderer draws a line along the path of each particle. It is relatively expensive but allows you to draw smooth lines along your particles, which may be useful in complex movement scenarios such as the vortex example in the video below.

* **Length:** The length of the rope trail. For long trails, make sure to also increase the lifetime of the particles in the **Initializer** settings.
* **Segments:** The number of segments in each line. Higher numbers makes the particles smoother at the cost of system performance.
* **Subdivision:** The number of subdivisions in each line. Higher numbers makes corners smoother at the cost of system performance.
* **UV scale:** Changes how often the texture is repeated. Make sure clamping is disabled when importing the texture, otherwise the particle will be cut off.
* **UV scrolling:** When enabled, the texture moves along the particles. Good for any type of stream (for example water).

<video width="90%" style="margin:0 auto;display:block;" controls loop autoplay>
  <source src="/videos/particle_renderer_rope_trail.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>