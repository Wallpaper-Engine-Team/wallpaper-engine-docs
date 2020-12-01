
# User Variables

You can define uniforms that will show up in the editor as various controls like sliders, a color picker or a UV position picker. This also allows you to bind user properties or scripts to a variable and use that as an input to your shader.

Use the **Snippets --> Add Variable** menu and choose any of the variables to let the editor automatically insert the required code.

::: tip
Make sure all of your variables begin with the prefix **u_**. This guarantees that no future update will break your shader! We might add global constants in the future and using u_ as a prefix will ensure that there won't be any conflicts!
:::

## Slider
```
uniform float u_userNewSlider; // {"material":"My new slider","default":0,"range":[0,1]}
```
* **u_userNewSlider**: This is the name of the variable. Make sure to rename it to anything that makes sense for you.
* **"material":"My new slider"**: You can enter the visible name for the variable here, this is what you will see in the editor.
* **"default":0**: This is the default value for the slider.
* **"range":[0,1]**: This is the minimum and maximum value of the slider.

## Color
```
uniform vec3 u_userNewColor; // {"material":"My new color","type":"color","default":"1 1 1"}
```
* **u_userNewColor**: This is the name of the variable. Make sure to rename it to anything that makes sense for you.
* **"material":"My new color"**: You can enter the visible name for the variable here, this is what you will see in the editor.
* **"default":"1 1 1"**: This is the default color, in this case it's white.

## UV Picker
```
uniform vec2 u_userNewPosition; // {"material":"My new position","position":true,"default":"0.5 0.5"}
```
* **u_userNewPosition**: This is the name of the variable. Make sure to rename it to anything that makes sense for you.
* **"material":"My new position"**: You can enter the visible name for the variable here, this is what you will see in the editor.
* **"default":"0.5 0.5"**: This is the default position, in this case it's right in the center.
