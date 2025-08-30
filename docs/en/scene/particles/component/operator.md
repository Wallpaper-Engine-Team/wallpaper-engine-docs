---
prev: ../introduction.md
---

# Particle Component - Operators

Operators act on the particles over time after they have been spawned. Other components may require you to add the appropriate operator. For example, if an initializer spawns particles with a certain velocity, you need the **Movement operator** for an actual movement to occur.

[[toc]]

## Operator blending

Many operators have a section regarding **operator blending**. This optional functionality allows you to start and stop the specific operator during specific points in a single particle's lifetime. All values are provided in a range of `0.00` to `1.00` where `0.00` represents the spawn time of particle while `1.00` represents the last frame of a particle. In other words, it is a scale that represents 0% to 100% of a single particle's lifetime in percent (not in seconds!).

* **Blend-in start:** Time at which the operator's action should start fading in.
* **Blend-in end:** Time at which the operator's action should finish fading in. After this point, the operator is working in full effect.
* **Blend-out start:** Time at which the operator should begin to unwind.
* **Blend-out end:** Time at which the operator fully stops working.

### Operator Blending Example

Take the following setup for any supported operator:

* **Blend-in start:** `0.2`
* **Blend-in end:** `0.4`
* **Blend-out start:** `0.6`
* **Blend-out end:** `0.8`

This means that the operator starts working at **20%** of a particle's lifetime. At **40%** of the particle's lifetime, the operator is working in full effect. At **60%** of the particle lifecycle, the operator starts to wind down again. Finally, at **80%** the operator comes to a full stop. The particle lives on for the remaining 20% without the operator.

## Movement

Introduces movement to your particles. Use it in conjunction with **Initializers** such as **Velocity random** or other operators.

::: danger Please note
If this operator is missing from your particle system, your particles will not move at all.
:::

* **Gravity:** A gravity setting that pulls particles in a certain direction. Should not be solely used for directional movements, use any velocity-related **Initializer** or **Operator** instead.
* **Worldspace:** When enabled, movement occurs in the worldspace. Especially noticeable when the particle system is rotating for example. Not to be confused with the **Worldspace** option in the [General](/en/scene/particles/component/general.html#worldspace) particle system settings.
* **Drag:** Slows down particles over time. You can also enter a negative value to accelerate particles over time.

## Angular movement

Adds an angular movement to your particles, causing them to turn around the specified axes. Required by the **Angular velocity random** initializer.

* **Force:** The direction in which the particles should accelerate along each frame.
* **Drag:** Slows down particles angular movement over time. You can also enter a negative value to accelerate particles angular movements over time.

## Alpha fade

Causes particles to fade in when created and fade out before their lifetime ends. Values are entered relative to the lifetime of the particle.

* **Fade-in time:** The time percentage until the fade-in is completed. Valid range: `0.00` - `1.00`.
* **Fade-out time:** The time percentage at which the fade-out starts. Valid range: `0.00` - `1.00`.

::: details Click here to learn more about the value range
If your particle has a lifetime of 5 seconds and you enter a *fade-in time* of `0.2`, the particles will fade in for 1 second (5 seconds * 0.2). Entering a *fade-out time* of `0.7` means the particles will start fading out after 3.5 (5 seconds * 0.7 = 3.5 seconds).

The fade-in always starts at the time of the particle creation and the fade-out always ends when the lifetime of the particle ends.
:::

## Size change

Changes the size of the particles relative to their lifetime.

* **Start value:** The particle scale which is applied before the **Start time** is reached.
* **End value:** The particle scale which is applied when the **End time** is reached.
* **Start time:** The time percentage at which the transition between the **start value** and **end value** begins. Valid range: `0.00` - `1.00`.
* **End time:** The time percentage at which the **end value** should be reached. The particle will start transitioning towards here after the start time has been reached. Valid range: `0.00` - `1.00`.

::: details Click here to learn more about the start time and end time value range
If your particle has a lifetime of 5 seconds and you enter a *start time* of `0.2`, the particles will start transitiong from the **start value** towards the **end value** after 1 second (5 seconds * 0.2). Entering an *end time* of `0.7` means the particles will start resizing after the start time has been reached until it reaches the end time at 3.5 seconds (5 seconds * 0.7 = 3.5 seconds).
:::


## Color change

Changes the color of the particles relative to their lifetime.

* **Start value:** The particle color which is applied before the **Start time** is reached.
* **End value:** The particle color which is applied when the **End time** is reached.
* **Start time:** The time percentage at which the transition between the **start value** and **end value** begins. Valid range: `0.00` - `1.00`.
* **End time:** The time percentage at which the **start value** should be reached. The particle will start transitioning here after the start time has been reached. Valid range: `0.00` - `1.00`.

::: details Click here to learn more about the start time and end time value range
If your particle has a lifetime of 5 seconds and you enter a *start time* of `0.2`, the particles will start transitiong from the **start value** towards the **end value** after 1 second (5 seconds * 0.2). Entering an *end time* of `0.7` means the particles will start recoloring after the start time has been reached until it reaches the end time at 3.5 seconds (5 seconds * 0.7 = 3.5 seconds).
:::

## Alpha change

Changes the opacity of the particles relative to their lifetime.

* **Start value:** The particle opacity which is applied before the **Start time** is reached. Valid range: `0.00` - `1.00`.
* **End value:** The particle opacity which is applied when the **End time** is reached. Valid range: `0.00` - `1.00`.
* **Start time:** The time percentage at which the transition between the **start value** and **end value** begins. Valid range: `0.00` - `1.00`.
* **End time:** The time percentage at which the **start value** should be reached. The particle will start transitioning here after the start time has been reached. Valid range: `0.00` - `1.00`.

::: details Click here to learn more about the start time and end time value range
If your particle has a lifetime of 5 seconds and you enter a *start time* of `0.2`, the particles will start transitiong from the **start value** towards the **end value** after 1 second (5 seconds * 0.2). Entering an *end time* of `0.7` means the particles will start changing their opacity after the start time has been reached until it reaches the end time at 3.5 seconds (5 seconds * 0.7 = 3.5 seconds).
:::

## Oscillate position

Creates a regular positional movement per particle that oscillates with different parameters per particle. Particles choose a random frequency, scale and phase value in the provided range.

* **Mask:** Allows you to create a bias for specific axes.
* **Frequency min:** The minimum number of oscillations per particle lifetime.
* **Frequency max:** The maximum number of oscillations per particle lifetime.
* **Scale min:** The minimum scale of the movement (baseline is `1.00`).
* **Scale max:** The maximum scale of the movement (baseline is `1.00`).
* **Phase min:** Phase adds an offset to the particles. This is the minimum that is added. Recommended value: `0.00`
* **Phase max:** Phase adds an offset to the particles. This is the maximum that is added. Recommended value: `6.28` (2 * π)

## Oscillate alpha

Regularly changes the transparency with different parameters per particle. Particles choose a random frequency, scale and phase value in the provided range.

* **Frequency min:** The minimum number of oscillations per particle lifetime.
* **Frequency max:** The maximum number of oscillations per particle lifetime.
* **Scale min:** The minimum alpha value that is used in the animation (`0.00` - `1.00`).
* **Scale max:** The maximum alpha value that is used in the animation (`0.00` - `1.00`).
* **Phase min:** Phase adds an offset to the particles. This is the minimum that is added. Recommended value: `0.00`
* **Phase max:** Phase adds an offset to the particles. This is the maximum that is added. Recommended value: `6.28` (2 * π)

## Oscillate size

Regularly changes the size with different parameters per particle. Particles choose a random frequency, scale and phase value in the provided range.

* **Frequency min:** The minimum number of oscillations per particle lifetime.
* **Frequency max:** The maximum number of oscillations per particle lifetime.
* **Scale min:** The minimum size value that is used in the animation (baseline is `1.00`).
* **Scale max:** The maximum size value that is used in the animation (baseline is `1.00`).
* **Phase min:** Phase adds an offset to the particles. This is the minimum that is added. Recommended value: `0.00`
* **Phase max:** Phase adds an offset to the particles. This is the maximum that is added. Recommended value: `6.28` (2 * π)

## Control point force

Either pulls or pushes particles when near a control point with the provided distances and strength.

::: tip Let particles react to the mouse cursor
To make this particle system react to the mouse cursor, first set the **control point** option to `1` (or higher). Please note: This is not possible with control point `0`.

Next, select the control point you chose in the **Control Points** section of the particle system and enable the **Lock to pointer** option. Now the particle system will react to the mouse cursor.
:::

* **Offset:** Lets you adjust the position of the force relative to the selected control point.
* **Scale:** The strength of the force. Positive values pull particles to the control point. Negative values push particles away.
* **Distance:** The maximum distance of the force.
* **Control point:** The control point index that this operator works with. Valid numbers: `0` - `7`.
* **Reduce velocity near center:** Reduces the attraction rate towards the control point.
* **Delete particles in center:** Adds additional **Deletion threshold option** that lets you define how close particles can come to the center of the control point before they get deleted. Triggers the **death** event on deletion.

## Maintain distance to control point

This operator places particles in a circle around a provided control point.

* **Control point:** The control point index that this operator works with. Valid numbers: `0` - `7`.
* **Distance:** The distance to the control point.
* **Variable strength:** Factor on how strong the position should be enforced. Valid range is `0.00` - `1.00`.

## Maintain distance between control points

This operator distributes particles between two control points.

* **Control point start:** The first control point that is used to determine the particle position. Valid numbers: `0` - `7`.
* **Control point end:** The first control point that is used to determine the particle position. Valid numbers: `0` - `7`.

## Reduce movement near control point

The operator reduces the movement speed of particles in its range. Negative reduction values result in a speeding up of particles.

* **Control point:** The control point index that this operator works with. Valid numbers: `0` - `7`.
* **Distance inner:** The inner circle of the force, here the **Reduction inner** value applies.
* **Distance outer:** The outer circle of the force, here the **Reduction outer** value applies.
* **Reduction inner:** The speed reduction within the inner circle of the operator. Negative values result in increased speeds.
* **Reduction outer:** The speed reduction within the outer circle of the operator. Negative values result in increased speeds.

## Turbulence

Introduces turbulent movements with random noise to the particles.

* **Noise speed:** Alters the speed of the underlying noise mask, you can adjust this to change the randomness.
* **Noise scale:** Alters the size of the underlying noise mask, you can adjust this to change the randomness.
* **Mask:** Lets you adjust the scale of the turbulence on the specific axes.
* **Speed min:** The minimum turbulence speed.
* **Speed max:** The maximum turbulence speed.
* **Phase min:** Phase adds an offset to the particles. This is the minimum that is added. Recommended value: `0.00`
* **Phase max:** Phase adds an offset to the particles. This is the maximum that is added. Maximum value: `6.28` (2 * π)

**Audio response**

The audio response feature adds a factor to the **Phase** values of the particles, introducing random outbreaks of particles. Make sure that your **Phase min** and **Phase max** options are configured in a sensible range, such as `1.00` to `5.00`, as this feature has no effect on particles with a `0.00` phase.

* **Mode:** To enable the audio response feature, first configure the mode. Set this option to **Center** to make the particles respond to all audio being played. Set it to **Left** or **Right** to limit the audio response to the left or right audio channel only.
* **Exponent:** Exponential power of the audio response to bias the response towards lower or higher values. By increasing this value, you will reduce how strongly low audio volume will affect the pulse effect.
* **Bounds:** The bounds control at what points the audio response starts and stops. If the audio bounds are configured to be 0 and 1, then the audio effect will slowly fade. A more sudden effect can be achieved by making the bounds more narrow. For example, if you set the audio bounds to 0.8 and 1, the audio responsiveness will only take effect for volume levels between 0.8 and 1 which makes the audio effect more sudden and limits it to the upper range of volume levels.
* **Frequency min:** The **lowest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
* **Frequency max:** The **highest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).

## Vortex

Spins particles around in a vortex. Has two modes: Standard vortex and ring-shaped.

* **Axis:** Lets you define the axis of the vortex movement.
* **Ring shape:** When enabled, switches the vortex to a ring shape, meaning the center is hollow and unaffected by any forces while the ring itself has a width in which forces are acted upon.

**Ring shape:**
* **Ring radius:** The radius of the ring.
* **Ring width:** The width of the ring.
* **Ring pull distance:** The distance at which the ring attracts outside particles.
* **Ring pull force:**  The strength at which the ring attracts particles.

**Standard vortex:**
* **Distance inner:** The inner distance of the vortex.
* **Distance outer:** The outer distance of the vortex.

**Shared settings:**
* **Speed inner:** The speed of particles within the inner distance.
* **Speed outer:** The speed of particles within the outer distance.
* **Infinite axis:** When enabled, the influence range becomes cylinder-shaped instead of a sphere.
* **Control point:** The control point index around which the vortex is centered. Valid numbers: `0` - `7`. Control point `0` represents the origin of the particle system.
* **Maintain distance to center:** When enabled, particles will be attracted to the center of the vortex instead of whirling them away.
* **Center force:** The strength at which particles are pulled into the center of the vortex.

**Audio response**

The audio response feature ties the particle speed to audio playback, causing the vortex to stop spinning when no audio is being played.

* **Mode:** To enable the audio response feature, first configure the mode. Set this option to **Center** to make the particles respond to all audio being played. Set it to **Left** or **Right** to limit the audio response to the left or right audio channel only.
* **Exponent:** Exponential power of the audio response to bias the response towards lower or higher values. By increasing this value, you will reduce how strongly low audio volume will affect the pulse effect.
* **Bounds:** The bounds control at what points the audio response starts and stops. If the audio bounds are configured to be 0 and 1, then the audio effect will slowly fade. A more sudden effect can be achieved by making the bounds more narrow. For example, if you set the audio bounds to 0.8 and 1, the audio responsiveness will only take effect for volume levels between 0.8 and 1 which makes the audio effect more sudden and limits it to the upper range of volume levels.
* **Frequency min:** The **lowest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
* **Frequency max:** The **highest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).

## Boids

Simulate the flocking behavior of birds and other group movements. Particles will start to form groups for their movements.

* **Neighbor threshold:** This setting defines the radius around a particle that it considers its local neighborhood. Only other particles within this distance will influence its behavior for alignment and cohesion.
* **Separation threshold:** This is the distance within which a particle will actively try to move away from its neighbors to avoid collision.
* **Separation factor:** A higher value will cause particles to steer away from each other more forcefully, resulting in a more spread-out flock.
* **Cohesion factor:** A higher cohesion factor will result in a tighter, more densely packed flock as the particles will have a stronger urge to stay together.
* **Alignment factor:** This determines how much a particle will try to match the velocity of its neighbors. A higher alignment factor will cause particles to align their movement paths more quickly and uniformly, leading to a more organized and synchronized flock movement.
* **Clamp speed:** When enabled, particle speed is limited.
* **Max speed:** The maximum speed of particles.

## Cap velocity

Lets you set an upper limit for the speed of particles. With the use of **Operator blending** (see the top of this page), this option can be introduced or removed during a particle's lifetime.

* **Max speed:** The maximum speed for each individual particle.

## Remap value

A relatively complex operator that allows for a great level of custom particle behavior. It allows you to take an input value - including global values like the current time of day or the current runtime of the wallpaper - and gives you the ability to utilize them by modifying certain particle properties with them.

Since this is an *Operator*, the changes are continuously applied to all particles which makes it relatively performance-intensive. You can also use this feature as an *Initializer* to only apply this logic at the time of the particle creation.

* **Input:** The input value that is used for the remapping operation.
* **Clamp input value:** If enabled, values will be reduced to the range that you define for the input range below, otherwise values can exceed the provided range.
* **Output:** The output value that is being changed with the remap operation.
* **Clamp output value:** If enabled, values will be reduced to the range that you define for the output range below, otherwise values can exceed the provided range.
* **Operation:** Controls what is done with the input and output value. **Assign** will overwrite the existing output value. **Multiply** multiplies the output and input value. **Add** sums up the input and output value. **Subtract** subtracts the input value from the existing output value.
* **Transform function:** Allows you to add a wave or noise to the operation.

::: details Click to view example: Input: Speed - Remap Output: Size

This is just one example of nearly infinite combinations that can be made to showcase the remap operator. You can combine any input and output values in creative ways.

In this example, we want to increase the size of particles whenever they increase their speed. We first choose **Speed** as an **Input** value. Since we want to modify the size of particles, we set **Size** as an **Output** value.

For **Operation**, we use **Multiply**, alternatively you could also use **Assign** to have full control over the particle sizes. This becomes relevant in the output range further down below.

Next, you need to define the scale of input values. In our case, particles can be at a complete standstill at a speed of `0` and they can reach up to a speed of `500`. Accordingly, we set the **Input range min** to `0` and the **Input range max** to `500` to cover the full range. Internally, this range will be normalized to `0.0` to `1.0` (representing 0% - 100%).

The **Output range min** and **Output range max** represent the new **Size** of the particles. If you set the **Operation** to **Multiply**, then the original size is multiplied by the normalized input value. A sensible **minimum** output may be `0.1` for example, so the size of particle closest to the control point will be multiplied by `0.1`. By setting the maximum output range to `2.0`, particles farthest away will have their size multiplied by `2.0`.

The resulting behavior can be seen here, where particles are pushed by a **control point force**. When they increase their speed, they also increase in size, and when they slow back down, they also shrink back down:

<video width="100%" controls loop>
  <source src="/videos/particle_operator_remap.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
:::

## Inherit value from event

This operator allows you to copy a value from a parent particle system onto the child. This is useful if the parent particle has a perpetually changing dynamic property that you want to match on the child particle. In many cases, you can also optimize this and use the **Initializer** with the same name, since this operator constantly checks for changes in the parent which can be costly on performance.

## Collision Operators

There are 5 operators that allow you to introduce some form of collision for your particle system:

* **Collision plane:** Collides particles along an infinite line.
* **Collision quad:** Collides particles along a limited line from one side.
* **Collision sphere:** Collides particles against a spherical object.
* **Collision bounds:** Collides particles against the outlines of the wallpaper.
* **Collision model:** Collides particles against a 3D model or a puppet warp model.

There are four **collision behaviors** shared across these operators:

* **Bounce:** Particles will bounce off when the collision occurs. Bounce strength can be tweaked using the **Bounce factor** option.
* **Slide:** Particles will continue to slide along the object when colliding.
* **Stop:** Instantly stops any particle movement when colliding.
* **Delete:** Particles will be deleted when they collide with the object. Triggers the **death** event on the particle, allowing you to spawn child particles for example.

Additionally, some operators also have these shared options:

* **Lock to control point:** When enabled, you can choose a control point that this operator is attached to. Valid numbers: `0` - `7`.
* **Stop rotation on collision:** When enabled, any rotation will be stopped once the collision occurs. Useful for falling objects that are supposed to rest on the collision object.

### Collision plane

* **Plane:** The axis orthogonal to the plane. You can combine multiple components to create a diagonal plane, for example.
* **Distance:** The offset along the orthogonal plane axis to define the final position of the plane.

### Collision sphere

* **Origin:** The position of the sphere within the particle system.
* **Radius:** The radius of the sphere.

### Collision bounds

This operator has no further options than the standard ones described above. It will automatically use the outlines of the wallpaper as a bounding box that particles cannot escape.

### Collision quad

* **Origin:** The position of the quad within the particle system.
* **Plane:** The axis orthogonal to the plane. You can combine multiple components to create a diagonal plane, for example. Since the collision only occurs from one side, you can use `-1` to switch the side that you want to use.
* **Forward:** The forward vector of the plane to define its rotation around the orthogonal plane axis. The forward vector is only relevant in a 3D context, leave it as X: `0`, Y: `0`, Z: `1` in a 2D wallpaper.

### Collision model

Forms collision capsules around the bones of a single puppet warp or 3D model. Can become very expensive if a lot of bones are used by the model.

No further options than the standard ones described above. However, you need to select either a puppet warp layer or a 3D model layer and drag and drop it into the **Layer connection** section that appears when selecting the particle system in the asset list, otherwise the operator will have no effect.