# Model Animation Setup

If your model file includes bones and animations, Wallpaper Engine will display a **Configure Model** button when selecting the model in the editor. In this guide, we will show you how to set up animations for your model and how to blend from one animation to the next.

## Clipping your Animation

Often, model files will have all their animations merged into one long animation. Wallpaper Engine offers a way to separate animations into many individual clips that you can utilize in your wallpaper. If this is not the case for your model, you can skip this section. To get started, click on **Configure Model**.

::: tip
In some cases, animations may even be spread out into individual FBX files. In this case, start your project with one model file. To import more versions of the same model with different animations, use the **Add FBX File** button in the **Animation** tab of the model editor.
:::

In the **Animation tab** of the model editor, focus on the **Animations** section. Select the animation that you want to split into clips and click on **Add Clip**. In our case, we have a model of a dog and the animation contains various animations. We want to extract the first animation which is a walking animation. We recommend adding names for each clip so that you can find them more easily later on.

### Locating the Animation Frames

In order to create a usable clip, we need to find the start and end frames. In our case, the animation starts at frame `0`, so we can ignore the **Start frame** option. We move on to the **End frame** option and search for the end of the walking animation. You can use the mouse wheel to increase and decrease the current frame quickly or use the individual arrow keys to navigate through the animation frame-by-frame.

In our case, the animation ends at frame `20`. Sometimes animations can have *dead* frames in between animations, make sure to cut these off to prevent any jittering in your animation later. In some use-cases, you may also want to set an **frame offset** in the clip options. This can be useful if you want the first playback of the animation to start at a later frame which can help to add or remove synchronization with other animations in your wallpaper.

Repeat this process for all animations you want to extract into individual clips for later use in your wallpaper.

## Enabling root motion

If, for example, you have a walking animation, you usually want your character to actually move within the 3D space in line with the animation. To achieve this, scroll down in the **Clip options** and select the proper **Motion root bone**. Typically, the root bone is not an element of the model itself but rather represents its foundation. After selecting the bone, you should start seeing your model move in the preview area on the right-hand side.

::: danger
If you intend to having your character move around entirely through root motion, make sure the animation is *"perfectly aligned"*, otherwise your characters may slowly drift away from the screen if the wallpaper is used for hours. When in doubt, you should reset the model origin via SceneScript for example.
:::

In the editor, you can now add an animation by clicking on **Add** in the **Skeletal animation** section.

See the entire process in this video:

<video width="100%" controls>
  <source src="/videos/model_animation_clip.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
