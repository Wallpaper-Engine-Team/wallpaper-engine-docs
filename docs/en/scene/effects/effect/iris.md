---
prev: ../overview.md
---
# Iris Movement Effect

The **Iris Movement** effect allows you to add motion to the eyes of a character. This effect will make your character gaze around realistically in a random manner. In order for this to work, you should start by adding an opacity mask to the eyes of your character. Depending on your specific image, try to make a soft transition from the iris/center to the border of the eyes to improve the results of the effect.

![Iris](/img/effects/Iris.gif)

### Effect Settings

* **Background:** Enabling this option will make the effect use the **background color** for parts of the eye that are invisible on the picture, but become visible when the eye moves. Disabling this option will make the effect distort the eye at the borders instead of using a solid color.
* **Background color:** The color to be used for invisible parts of the eye that become visible when it moves.
* **Opacity mask:** Use the opacity mask to limit the motion to the eyes.
* **Speed:** The speed of the iris movement.
* **Scale:** How much the iris moves horizontally and vertically. In many cases you may want to reduce the vertical movement only since eyes are typically much wider than they are high.
* **Noise amount:** The amount of constant motion that is added on top of the erractic gaze movement. This adds a little bit more randomness to the erratic motion to make it look less robotic.
* **Phase:** The offset in time of the movement. You can use this if you want to apply the motion effect twice, to the eyes and the entire head. The head typically moves a bit slower, so you can reduce the phase of the effect on the head to make the character look around realistically.
* **Smoothness:** How smoothly the gaze changes every couple of moments.

### Synchronized Eye and Head Movement

You can use this effect for the eyes and the entire head in two separate steps to create a realistically looking animation of how your character looks around randomly. First, create the iris animation on the eyes, then create a second animation for the entire head.

#### Eye Animation

Add an **Iris Movement** effect to your image and create an **Opacity Mask** around the eyes like this:

![Iris Eyes Mask](/img/effects/iris_eyes_mask.png)

Adjust the settings similarly to our example:

![Iris Eyes Settings](/img/effects/iris_eyes_settings.png)

#### Head Animation

Now duplicate the **Iris Movement** effect on your image. Remove the existing **Opacity Mask** from this effect by clicking the red X, then create a new one by clicking **Paint**. Create a smooth mask around the head like this:

![Head Eyes Mask](/img/effects/iris_head_mask.png)

You will have to adjust the settings a bit as well. Since they have been copied over, what you need to do is disable the **Background** option, increase the **Smoothness** and reduce the **Phase** option a little like this:

![Head Eyes Settings](/img/effects/iris_head_settings.png)

* **Background**: We disable this so instead of filling in the eye color when moving the iris, the image will instead be distorted around the edges of the mask.
* **Smoothness**: The head should not move as abruptly as the eyes, so we increase this option for the head.
* **Phase**: Setting this option to a small, negative number will make the head lag behind the eye movement.

::: tip
Make sure to keep the **Speed** exactly the same or your head and eye movement will be out of sync!
:::
