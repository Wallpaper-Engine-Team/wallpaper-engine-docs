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

Introduces movement to your particles. Use it in conjunction with **Initializers** such as **Velocity random** or on its own.

* **Gravity:** The direction which particles travel on each axis.
* **Worldspace:** When enabled, movement occurs in the worldspace. Especially noticeable when the particle system is rotating for example. Not to be confused with the **Worldspace** option in the [General](/en/scene/particles/component/general.html#worldspace) particle system settings.
* **Drag:** Slows down particles over time. You can also enter a negative value to accelerate particles over time.

## Angular movement

Adds an angular movement to your particles, causing them to turn around the specified axes. Required by the **Angular velocity random** initializer.

* **Force:** The direction in which the particles should turn.
* **Drag:** Slows down particles angular movement over time. You can also enter a negative value to accelerate particles angular movements over time.

## Alpha fade

Causes particles to fade in when created and fade out before their lifetime ends. Values are entered relative to the lifetime of the particle.

* **Fade-in time:** The time percentage until the fade-in is completed. Valid range: `0.00` - `1.00`
* **Fade-out time:** The time percentage at which the fade-out starts. Valid range: `0.00` - `1.00`

::: details Click here to learn more about the value range
If your particle has a lifetime of 5 seconds and you enter a *fade-in time* of `0.2`, the particles will fade in for 1 second (5 seconds * 0.2). Entering a *fade-out time* of `0.7` means the particles will start fading out after 3.5 (5 seconds * 0.7 = 3.5 seconds).

The fade-in always starts at the time of the particle creation and the fade-out always ends when the lifetime of the particle ends.
:::

## Size change

Changes the size of the particles relative to their lifetime.

* **Start value:** The particle scale which is reached when the **Start time** is reached.
* **End value:** The particle scale which is reached when the **End time** is reached.
* **Start time:** The time percentage at which the **start value** should be reached. Valid range: `0.00` - `1.00`
* **End time:** The time percentage at which the **start value** should be reached. The particle will start transitioning here after the start time has been reached. Valid range: `0.00` - `1.00`

::: details Click here to learn more about the start time and end time value range
If your particle has a lifetime of 5 seconds and you enter a *start time* of `0.2`, the particles will reach the **start value** after 1 second (5 seconds * 0.2). Entering an *end time* of `0.7` means the particles will start resizing after the start time has been reached until it reaches the end time at 3.5 seconds (5 seconds * 0.7 = 3.5 seconds).

The **start value** transition always starts at the time of the particle creation until the **start time**. The **end value** transition always starts after the **start time** has been reached until the **end time**.
:::


## Color change

Changes the color of the particles relative to their lifetime.

* **Start value:** The particle color which is reached when the **Start time** is reached.
* **End value:** The particle color which is reached when the **End time** is reached.
* **Start time:** The time percentage at which the **start value** should be reached. Valid range: `0.00` - `1.00`
* **End time:** The time percentage at which the **start value** should be reached. The particle will start transitioning here after the start time has been reached. Valid range: `0.00` - `1.00`

::: details Click here to learn more about the start time and end time value range
If your particle has a lifetime of 5 seconds and you enter a *start time* of `0.2`, the particles will reach the **start value** after 1 second (5 seconds * 0.2). Entering an *end time* of `0.7` means the particles will start recoloring after the start time has been reached until it reaches the end time at 3.5 seconds (5 seconds * 0.7 = 3.5 seconds).

The **start value** transition always starts at the time of the particle creation until the **start time**. The **end value** transition always starts after the **start time** has been reached until the **end time**.
:::

## Alpha change

Changes the opacity of the particles relative to their lifetime.

* **Start value:** The particle opacity which is reached when the **Start time** is reached. Valid range: `0.00` - `1.00`
* **End value:** The particle opacity which is reached when the **End time** is reached. Valid range: `0.00` - `1.00`
* **Start time:** The time percentage at which the **start value** should be reached. Valid range: `0.00` - `1.00`
* **End time:** The time percentage at which the **start value** should be reached. The particle will start transitioning here after the start time has been reached. Valid range: `0.00` - `1.00`

::: details Click here to learn more about the start time and end time value range
If your particle has a lifetime of 5 seconds and you enter a *start time* of `0.2`, the particles will reach the **start value** after 1 second (5 seconds * 0.2). Entering an *end time* of `0.7` means the particles will start changing their opacity after the start time has been reached until it reaches the end time at 3.5 seconds (5 seconds * 0.7 = 3.5 seconds).

The **start value** transition always starts at the time of the particle creation until the **start time**. The **end value** transition always starts after the **start time** has been reached until the **end time**.
:::

## Oscillate position

Creates a regular positional movement per particle that oscillates with different parameters per particle.

* **Mask:** Allows you to create a bias for specific axes.
* **Frequency min:** The minimum number of oscillations per particle lifetime.
* **Frequency max:** 
* **Scale min:** 
* **Scale max:**
* **Phase min:**
* **Phase max:**

## Oscillate alpha

* **Frequency min:** 
* **Frequency max:** 
* **Scale min:** 
* **Scale max:**
* **Phase min:**
* **Phase max:**

**Operator blending**

**Blend-in start:**
**Blend-in end:**
**Blend-out start:**
**Blend-out end:**

## Oscillate size

* **Frequency min:** 
* **Frequency max:** 
* **Scale min:** 
* **Scale max:**
* **Phase min:**
* **Phase max:**

## Control point force

* **Offset:** Lets you adjust the position of the force relative to the control point.
* **Scale:** The strength of the force. Positive values pull particles to the control point. Negative values push particles away.
* **Threshold:** The maximum distance of the force..
* **Control point:** The control point index that this operator works with. Valid numbers: `0` - `7`.

## Turbulence

* **Timescale:** 
* **Mask:** 
* **Scale:** 
* **Speed min:**
* **Speed max:**
* **Phase min:**
* **Phase max:**

**Audio response**

The audio response feature adds a factor to the **Phase** values of the particles, introducing random outbreaks of particles. Make sure that your **Phase min** and **Phase max** options are configured in a sensible range, such as `1.00` to `5.00`, as this feature has no effect on particles with a `0.00` phase.

* **Mode:** To enable the audio response feature, first configure the mode. Set this option to **Center** to make the particles respond to all audio being played. Set it to **Left** or **Right** to limit the audio response to the left or right audio channel only.
* **Exponent:** Exponential power of the audio response to bias the response towards lower or higher values. By increasing this value, you will reduce how strongly low audio volume will affect the pulse effect.
* **Bounds:** The bounds control at what points the audio response starts and stops. If the audio bounds are configured to be 0 and 1, then the audio effect will slowly fade. A more sudden effect can be achieved by making the bounds more narrow. For example, if you set the audio bounds to 0.8 and 1, the audio responsiveness will only take effect for volume levels between 0.8 and 1 which makes the audio effect more sudden and limits it to the upper range of volume levels.
* **Frequency min:** The **lowest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
* **Frequency max:** The **highest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).


## Vortex

* **Offset:** 
* **Axis:** 
* **Distance inner:**
* **Speed inner:**
* **Speed outer:**
* **Infinite axis:**
* **Control point:**

**Audio response**

The audio response feature ties the particle speed to audio playback, causing the vortex to stop spinning when no audio is being played.

* **Mode:** To enable the audio response feature, first configure the mode. Set this option to **Center** to make the particles respond to all audio being played. Set it to **Left** or **Right** to limit the audio response to the left or right audio channel only.
* **Exponent:** Exponential power of the audio response to bias the response towards lower or higher values. By increasing this value, you will reduce how strongly low audio volume will affect the pulse effect.
* **Bounds:** The bounds control at what points the audio response starts and stops. If the audio bounds are configured to be 0 and 1, then the audio effect will slowly fade. A more sudden effect can be achieved by making the bounds more narrow. For example, if you set the audio bounds to 0.8 and 1, the audio responsiveness will only take effect for volume levels between 0.8 and 1 which makes the audio effect more sudden and limits it to the upper range of volume levels.
* **Frequency min:** The **lowest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
* **Frequency max:** The **highest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
