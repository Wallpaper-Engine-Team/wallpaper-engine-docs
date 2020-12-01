
# Shader Overview

Shaders allow you to program custom image effects in Wallpaper Engine. To get started, create a new image effect for your layer after enabling the [Asset Creation](/scene/assetsharing) option in the view menu of the editor. You can now open the shader editor by clicking on **edit** next to either the fragment/pixel or vertex shader on the right.

Wallpaper Engine uses shaders that are loosely written in GLSL and then translates them into HLSL if required. The reference and tutorials here will not cover shaders in general, it is strongly recommended that you already have a good understanding of shaders before continuing here.

If you have any compilation errors, click on the red **View Errors** button in the shader editor to investigate the translated shader code. The button will only appear after an error has been encountered.

::: tip
The editor currently supports the creation of effect shaders only and we will make sure that the program will stay backward compatible with them. You can also create 3D model shaders as long as they are compatible with the existing generic2.vert and generic2.frag files. However, please do not replace other system shaders like the particle shader.

While this is possible to do, we will not support backward compatibility with custom shaders overwriting any system shaders. We may change them and if you replaced them in your wallpaper, your wallpaper may stop working.
:::
