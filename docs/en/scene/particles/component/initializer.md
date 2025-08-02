---
prev: ../introduction.md
---

# Particle Component - Initalizers

Initializers define properties of your particles. For a basic particle system, we recommend adding at least the **Lifetime random** (to define how many seconds the particles are rendered) and **Size random** (how large the particles are) initializers.

[[toc]]

## Lifetime random

Defines how long the particles are rendered. Values are determined randomly between the **Min** and **Max** value. If you always want a fixed lifetime, set **Min** and **Max** to the same value.

* **Min:** The minimum lifetime in seconds.
* **Max:** The maximum lifetime in seconds.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

Keep in mind that for high lifetimes, particles will stop spawning once the maximum number of particles has been reached. You can adjust the particle limit by changing the **Max count** option in the [General](/en/scene/particles/component/general.html#max-count) particle settings.

## Size random

Defines how the size of the particles. Values are determined randomly between the **Min** and **Max** value. If you always want a fixed size, set **Min** and **Max** to the same value.

* **Min:** The minimum size.
* **Max:** The maximum size.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## Color random

Defines how the color of the particles. Values are determined randomly between the **Min** and **Max** value. If you always want a fixed color, you can change the overall particle system color in the properties list of the particle system instead.

* **Min:** The primary color.
* **Max:** The secondary color.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## HSV color random

Allows you to apply colors to your particles based on HSV, essentially allowing you to select the hue, saturation and brightness (value) to your particles, allowing for a different range of colors than the standard `Color random` initializer.

* **Hue min:** The starting range of the hue color space.
* **Hue max:** The end range of the hue color space.
* **Hue steps:** The number of different hues used in the particle system.
* **Saturation min:** The minimum saturation (values from `0.00` to `1.00`).
* **Saturation max:** The maximum saturation (values from `0.00` to `1.00`).
* **Value min:** The minimum brightness of the particles (values from `0.00` to `1.00`).
* **Value max:** The maximum brightness of the particles (values from `0.00` to `1.00`).

## Color list

Allows you to define up to ten colors which are randomly applied to particles at the time of their creation.

* **Colors:** The number of colors you want to define.
* **Hue noise:** Introduces randomness to the hue of particles (values from `0.00` to `1.00`).
* **Saturation noise:** Introduces randomness to the saturation of particles (values from `0.00` to `1.00`).
* **Value noise:** Introduces randomness to the absolute color value of particles (values from `0.00` to `1.00`).

## Alpha random

Defines how the opacity of the particles. Values are determined randomly between the **Min** and **Max** value.

* **Min:** The minimum opacity.
* **Max:** The maximum opacity.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## Velocity random

Defines the starting speed of the individual particles. Values are determined randomly between the **Min** and **Max** value. Make sure your particle system has at least a standard [Movement Operator](/en/scene/particles/component/operator.html) assigned, otherwise your particles will not move even after adding this initializer.

* **Min:** The minimum speed in the given direction.
* **Max:** The maximum speed in the given direction.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## Inherit control point velocity

Allows you to apply the movement speed and direction of a control point to newly spawned particles. Control points can be moved by attaching them to the mouse cursor, timeline animations or via SceneScript.

* **Speed min:** The minimum speed with which particles spawn.
* **Speed max:** The maximum speed with which particles spawn.
* **Control point:** The control point to which this initializer is bound to. Values `0` - `7`.

## Turbulent velocity random

An advanced initializer for particle speeds. Can be used whenever you want to create the appearance of random gusts of wind, for example in a smoke stream. In your **Emitter**, set the **Distance Min** and **Distance Max** values both to `0`, otherwise this initializer might not render in a sensible way.

* **Scale:** Changes the range of the turbulence. A value of `1.00` means the turbulence moves in all directions, `0.00` means it only moves into the **Forward** direction in a perfect line and a value of `2.00` means that it can wind over itself.
* **Noise speed:** The speed of the turbulent noise. Try sticking to low values like `0.1` for smoke-like effects.
* **Offset:** Introduces a directional offset to the **Forward** value.
* **Speed min:** The minimum speed with which particles spawn.
* **Speed max:** The maximum speed with which particles spawn.
* **Phase min:** Phase adds an offset to the particles. This is the minimum that is added. You can set this down to `0.0`.
* **Phase max:** The maximum phase value, we recommend values up to `6.28` (2 * π). If both **Phase min** and **Phase max** are set to `0.0`, particles will spawn in a perfect line.
* **Forward:** The forward direction of the turbulence. A value of `X: 0 / Y: 1 / Z: 0` would cause the forward direction to be upwards.
* **Normal:** Changes the normal vector, mainly relevant for 3D scenes if you want the particles to go along another axis. Cannot be equal to the **Forward** vector. For 2D scenes, you can set this untouched at `X: 0 / Y: 0 / Z: 1`.

**Audio response**

The audio response feature adds a factor to the **Phase** values of the particles, introducing random outbreaks of particles. Make sure that your **Phase min** and **Phase max** options are configured in a sensible range, such as `0.00` to `6.28` (2 * π).

* **Mode:** To enable the audio response feature, first configure the mode. Set this option to **Center** to make the particles respond to all audio being played. Set it to **Left** or **Right** to limit the audio response to the left or right audio channel only.
* **Exponent:** Exponential power of the audio response to bias the response towards lower or higher values. By increasing this value, you will reduce how strongly low audio volume will affect the pulse effect.
* **Bounds:** The bounds control at what points the audio response starts and stops. If the audio bounds are configured to be 0 and 1, then the audio effect will slowly fade. A more sudden effect can be achieved by making the bounds more narrow. For example, if you set the audio bounds to 0.8 and 1, the audio responsiveness will only take effect for volume levels between 0.8 and 1 which makes the audio effect more sudden and limits it to the upper range of volume levels.
* **Frequency min:** The **lowest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
* **Frequency max:** The **highest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).

## Rotation random

Defines how the starting rotation of the particles. Values are determined randomly between the **Min** and **Max** value.

* **Min:** The minimum rotation.
* **Max:** The maximum rotation.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## Position offset random

Offsets the position in organic, fractal patterns can alternate between smooth to rough and chaotic. For best results, lower maximum emitter distance to near zero.

* **Directions:** The directional axes in which the pattern progresses.
* **Sign:** This setting allows you to force positive or negative values for the spawn location of your particles for the given axis. Valid values are:

* `0`: Default, both positive and negative values are possible.
* `1`: Only positive values are possible.
* `-1`: Only negative values are possible.

For example: By setting `X` to `-1`, all `X` values will be negative, meaning the particles will spawn to the left of the particle system only.
* **Distance:** The maximum distance particles are offset from the origin.
* **Octaves:** The number of layers that the underlying algorithm is applied. Experiment with values for different visual outcomes.
* **Noise scale:** Size of the underlying noise texture, allows you to alter the randomness.
* **Noise speed:** The speed of the underlying noise texture, allows you to alter the randomness. 

## Angular velocity random

Defines the starting angular velocity of the individual particles. Values are determined randomly between the **Min** and **Max** value. Requires the [Angular movement Operator](/en/scene/particles/component/operator.html) operator to be added to the particle system.

* **Min:** The minimum angular velocity on the given axis.
* **Max:** The maximum angular velocity on the given axis.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## Position around control point

Will generate the particles in a circle around a control point, for example the mouse cursor.

* **Count:** Defines the number of spawn points around the control point.
* **Modify count with layer settings:** When enabled, changes to the **Count** property on the particle system layer will affect the particle count.
* **Restart with periodic emission:** Restart the circle when **periodic emission** cycle is reached (see emitter settings).
* **Bounds:** Describes the start and end point of the circle, a full circle will go from `0.00` to `1.00`. For example, if you set `Start` to `0.0` and `End` to `0.5`, the particles will spawn in the first half of the circle around the control point.
* **Axis:** The axis along which the particles spawn, mainly relevant in a 3D context.
* **Speed min:** The minimum velocity with which particles are created.
* **Speed max:** The maximum velocity with which particles are created.
* **Orientation:** When set to **Repeat**, the particles will spawn in a full loop around the control point. When set to **Mirror**, the particle spawn point will move back and forth in the same loop.
* **Control point:** The control point to which this initializer is bound to. Values `0` - `7`. **Make sure to also bind your emitter to the same control point, otherwise the size of the circle will change depending on the distance to the control point.**

## Position between control points

Will generate the particles between two a control points.

* **Count:** Defines the number of spawn points around the control point.
* **Modify count with layer settings:** Restart the path between control points when **periodic emission** cycle is reached (see emitter settings).
* **Restart with periodic emission:** Restart the circle when **periodic emission** cycle is reached (see emitter settings).
* **Bounds:** Describes the start and end point of the line between control points. Valid values range from `0.00` to `1.00`. For example, if you set `Start` to `0.5` and `End` to `1.0`, the particles will spawn in the second half between the two control points.
* **Orientation:** When set to **Repeat**, the particles will spawn in a line from the start control point to the end control point. When set to **Mirror**, the particles spawn point will bounce back and forth between the start and end control point.
* **Control point start:** The first control point to which this initializer is bound to. Values `0` - `7`.
* **Control point end:** The second control point to which this initializer is bound to. Values `0` - `7`.
* **Reduce outer positions:** Normalizes the position near the control points for more concise start and end points.
* **Reduce outer velocity:** Flattens the velocity near the control points for a smoother ending
* **Reduce outer size:**  Reduces the size near the control points for a more precise end points.
* **Enable arc:** When enabled, the path between the control points is drawn in an arc.
    * **Arc amount:** The size of the arc.
    * **Arc direction:** The direction in which the arc bends.

## Remap initial value

A relatively complex initializer that allows for a great level of custom particle behavior. It allows you to take an input value - including global values like the current time of day or the current runtime of the wallpaper - and gives you the ability to utilize them by modifying certain particle properties with them.

Since this is an *Initializer*, the changes are applied at the time of the particle creation, you can also use this feature as an *Operator* if you would like these changes to occur continuously after the creation of individual particles.

* **Input:** The input value that is used for the remapping operation.
* **Clamp input value:** If enabled, values will be reduced to the range that you define for the input range below, otherwise values can exceed the provided range.
* **Output:** The output value that is being changed with the remap operation.
* **Clamp output value:** If enabled, values will be reduced to the range that you define for the output range below, otherwise values can exceed the provided range.
* **Operation:** Controls what is done with the input and output value. **Assign** will overwrite the existing output value. **Multiply** multiplies the output and input value. **Add** sums up the input and output value. **Subtract** subtracts the input value from the existing output value.
* **Transform function:** Allows you to add a wave or noise to the operation.

### Input & Output options

Each input and each output option will generate its own sub-options further down below the options list. These will typically let you define a value range. They may also include additional options, such as a control point, if relevant to their action.

Choosing the correct input and output range is critical, as the value range must make sense for the specific property. See the examples below to get an idea of how to use this feature.

::: details Click to view example: Input: Distance to control point - Remap Output: Size

This is just one example of nearly infinite combinations that can be made to showcase the remap initializer. You can combine any input and output values in creative ways.

In this example, we want to spawn smaller particles near a control point. We first choose **Distance to control point** as an **Input** value and since we want to modify the size of particles, we set **Size** as an **Output** value.

For **Operation**, we use **Multiply**, alternatively you could also use **Assign** to have full control over the particle sizes. This becomes relevant in the output range further down below.

Next, you need to define the scale of input values. In our emitter, we have defined that particles spawn in a distance between `0` to `500`. Accordingly, we set the **Input range min** to `0` and the **Input range max** to `500` to cover the full range. Internally, this range will be normalized to `0.0` to `1.0` (representing 0% - 100%).

The **Output range min** and **Output range max** represent the new **Size** of the particles. If you set the **Operation** to **Multiply**, then the original size is multiplied by the normalized input value. A sensible **minimum** output may be `0.1` for example, so the size of particle closest to the control point will be multiplied by `0.1`. By setting the maximum output range to `2.0`, particles farthest away will have their size multiplied by `2.0`.

![Remap initial value](/img/particles/remap_initializer.jpg)

:::

## Inherit value from event

This initializer allows you to copy a value from a parent particle system onto the child. This is useful if the parent particle has a dynamic property that you want to match on the child particle. For example, a red rocket flying into the air explodes with a red explosion.

* **Input:** The value you want to copy from the parent particle.