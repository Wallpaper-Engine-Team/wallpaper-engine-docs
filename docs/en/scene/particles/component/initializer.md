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

Defines the starting speed of the individual particles. Values are determined randomly between the **Min** and **Max** value.

* **Min:** The minimum speed in the given direction.
* **Max:** The maximum speed in the given direction.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## Turbulent velocity random

An advanced initializer for particle speeds. Optionally allows for **audio responsive** particle movements by enabling the appropriate option.

* **Scale:** 
* **Timescale:** 
* **Offset:** 
* **Speed min:** 
* **Speed max:** 
* **Phase min:** 
* **Phase max:** 
* **Forward:** 
* **Right:** 
* **Up:**

**Audio response**
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

Defines the starting angular velocity of the individual particles. Values are determined randomly between the **Min** and **Max** value.

* **Min:** The minimum angular velocity on the given axis.
* **Max:** The maximum angular velocity on the given axis.
* **Exponent:** A bias towards the minimum and maximum value. A value of `1` represents a balance between both **Max** and **Min**. A value of `0` represents a bias towards **Max**, values of `2` and higher represent a bias towards **Min**.

## Map sequence around control point

Will generate the particles around a control point, for example the mouse cursor.

* **Count:** Defines the number of spawn points around the control point.
* **Bounds:** 
* **Axis:** 
* **Speed min:**
* **Speed max:**
* **Orientation:** When set to **Repeat**, the particles will spawn in a full loop around the control point. When set to **Mirror**, the particle spawn point will move back and forth in the same loop.
* **Control point:** The control point to which this initializer is bound to. Values `0` - `7`.

## Map sequence between control points

Will generate the particles between two a control points, for example the mouse cursor and a pre-defined point in the wallpaper or two pre-defined points in the wallpaper.

* **Count:** Defines the number of spawn points around the control point.
* **Bounds:** 
* **Orientation:** When set to **Repeat**, the particles will spawn in a line from the start control point to the end control point. When set to **Mirror**, the particles spawn point will bounce back and forth between the start and end control point.
* **Control point start:** The first control point to which this initializer is bound to. Values `0` - `7`.
* **Control point end:** The second control point to which this initializer is bound to. Values `0` - `7`.