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

## Turbulent velocity random

An advanced initializer for particle speeds. Can be used whenever you want to create the appearance of random gusts of wind, for example in a smoke stream. In your **Emitter**, set the **Distance Min** and **Distance Max** values both to `0`, otherwise this initializer might not render in a sensible way.

* **Scale:** Changes the range of the turbulence. A value of `1.00` means the turbulence moves in all directions, `0.00` means it only moves into the **Forward** direction in a perfect line and a value of `2.00` means that it can wind over itself.
* **Timescale:** The speed of the turbulent noise. Try sticking to low values like `0.1` for smoke-like effects.
* **Offset:** Introduces a directional offset to the **Forward** value.
* **Speed min:** The minimum speed with which particles spawn.
* **Speed max:** The maximum speed with which particles spawn.
* **Phase min:** Phase adds an offset to the particles. This is the minimum that is added. You can set this down to `0.0`.
* **Phase max:** The maximum phase value, we recommend values up to `5.0`. If both **Phase min** and **Phase max** are set to `0.0`, particles will spawn in a perfect line.
* **Forward:** The forward direction of the turbulence. A value of `X: 0 / Y: 1 / Z: 0` would cause the forward direction to be upwards.
* **Normal:** Changes the normal vector, mainly relevant for 3D scenes if you want the particles to go along another axis. Cannot be equal to the **Forward** vector. For 2D scenes, you can set this untouched at `X: 0 / Y: 0 / Z: 1`.

**Audio response**

The audio response feature adds a factor to the **Phase** values of the particles, introducing random outbreaks of particles. Make sure that your **Phase min** and **Phase max** options are configured in a sensible range, such as `1.00` to `5.00`, as this feature has no effect on particles with a `0.00` phase.

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

## Angular velocity random

Defines the starting angular velocity of the individual particles. Values are determined randomly between the **Min** and **Max** value. Requires the [Angular movement Operator](/en/scene/particles/component/operator.html) operator to be added to the particle system.

* **Min:** The minimum angular velocity on the given axis.
* **Max:** The maximum angular velocity on the given axis.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## Position around control point

Will generate the particles in a circle around a control point, for example the mouse cursor.

* **Count:** Defines the number of spawn points around the control point.
* **Bounds:** The `X` value describes the start point and `Y` the end point. Valid values range from `0.00` to `1.00`. For example, if you set `X` to `0.0` and `Y` to `0.5`, the particles will spawn in the first half of the circle between the control points.
* **Axis:** The axis along which the particles spawn, mainly relevant in a 3D context.
* **Speed min:** The minimum velocity with which particles are created.
* **Speed max:** The maximum velocity with which particles are created.
* **Orientation:** When set to **Repeat**, the particles will spawn in a full loop around the control point. When set to **Mirror**, the particle spawn point will move back and forth in the same loop.
* **Control point:** The control point to which this initializer is bound to. Values `0` - `7`.

## Position between control points

Will generate the particles between two a control points.

* **Count:** Defines the number of spawn points around the control point.
* **Bounds:** The `X` value describes the start point and `Y` the end point. Valid values range from `0.00` to `1.00`. For example, if you set `X` to `0.5` and `Y` to `1.0`, the particles will spawn in the second half between the two control points.
* **Orientation:** When set to **Repeat**, the particles will spawn in a line from the start control point to the end control point. When set to **Mirror**, the particles spawn point will bounce back and forth between the start and end control point.
* **Control point start:** The first control point to which this initializer is bound to. Values `0` - `7`.
* **Control point end:** The second control point to which this initializer is bound to. Values `0` - `7`.
* **Reduce outer positions:** Normalizes the position near the control points for more concise start and end points.
* **Reduce outer velocity:** Flattens the velocity near the control points for a smoother ending
* **Reduce outer size:**  Reduces the size near the control points for a more precise end points.
* **Enable arc:** When enabled, the path between the control points is drawn in an arc.
    * **Arc amount:** The size of the arc.
    * **Arc direction:** The direction in which the arc bends.