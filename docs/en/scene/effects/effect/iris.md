---
prev: ../overview.md
---
# Iris Movement Effect

The **Iris Movement** effect allows you to add motion to the eyes of a character. This effect will make your character gaze around realistically in a random manner. In order for this to work, you should start by adding an opacity mask to the eyes of your character. Depending on your specific image, try to make a soft transition from the iris/center to the border of the eyes to improve the results of the effect.

![Tint](/img/effects/Iris.gif)

### Effect Settings

* **Background:** Enabling this option will make the effect use the **background color** for parts of the eye that are invisible on the picture, but become visible when the eye moves. Disabling this option will make the effect distort the eye at the borders instead of using a solid color.
* **Background color:** The color to be used for invisible parts of the eye that become visible when it moves.
* **Opacity mask:** Use the opacity mask to limit the motion to the eyes.
* **Speed:** The speed of the iris movement.
* **Scale:** How much the iris moves horizontally and vertically. In many cases you may want to reduce the vertical movement only since eyes are typically much wider than they are high.
* **Noise amount:** The amount of constant motion that is added on top of the erractic gaze movement. This adds a little bit more randomness to the erratic motion to make it look less robotic.
* **Phase:** The offset in time of the movement. You can use this if you want to apply the motion effect twice, to the eyes and the entire head. The head typically moves a bit slower, so you can reduce the phase of the effect on the head to make the character look around realistically.
* **Smoothness:** How smoothly the gaze changes every couple of moments.