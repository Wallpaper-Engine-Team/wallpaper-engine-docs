---
prev: ../overview.md
---
# Water Caustics Effect

The **Water Caustics** effect mimics light ray reflections in water. The effect supports perspective rendering, so that you can use it also on surfaces which are not perfectly angled from the top down.

![Water Caustics](/img/effects/Water_Caustics.gif)

### Effect Settings

* **Blend mode:** Determines the way in which the effect is blended into the image.
* **Style:** Choose between a more realistic and a more illustrative ("anime") style of the effect.
* **Perspective rendering:** When enabled, you can adjust the effects perspective by moving the effect corners within your image.
* **Opacity mask:** Allows you to limit the effect to certain parts of the image.
* **Pattern:** The pattern which is drawn by the effect.
* **Perlin noise:** A noise map which alters the effect movement to make it appear more random.
* **Offset:** Adds a time offset to certain parts of the effect.
* **Pattern glow:** Adds glowing pattern to the effect.
* **Brightness:** The overall brightness of the water caustics.
* **Chromatic Aberration:** Adds a color fringe to the effect.
* **Color start:** Adds a color to one side of the water caustics.
* **Color end:** Adds a color to the other end of the water caustics.
* **Distortion:** Defines the level of distortion that is applied to the pattern. A value of `0` stops all movement.
* **Glow:** The intensity at which the individual caustics shine.
* **Speed:** The speed at which the distortion moves.
* **Time offset:** Delays the entire effect, useful when using multiple instances of the same effect to desynchronize them.