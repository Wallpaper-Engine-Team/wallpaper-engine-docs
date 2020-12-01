
# Desaturation Tutorial

## Add New Effect
Make sure you have enabled the [Asset Creation](/scene/assetsharing) options in the editor!

* Click on **Add Effect** on the right.
* Click on **New** at the bottom of the dialog.
* Enter a new name for the effect and click OK.


## Edit the Shader
* Click on **Edit** next to the fragment shader.
* Add a new line of code just before **albedo** is returned. This is the code:

```
albedo.rgb = CAST3(dot(vec3(0.11, 0.59, 0.3), albedo.rgb)));
```

This code will take the current color of the image, make a dot product with a constant vector (these constants are typically used to determine luminosity) and then turn the single resulting float into a vec3 by using the **CAST3** function.

You can now click on **OK** on the right and you will already see that the image becomes fully desaturated through this new effect.

## Add Slider to Control Effect
To make the effect a bit more useful, we'll add a slider to control how much the image will be desaturated. Use the snippets menu to create a new float slider.

* Rename the slider variable and change the label, like this:
```
uniform float u_DesaturationAmount; // {"material":"Amount","default":1,"range":[0,1]}
```
* Now add the new slider value to the code. Using the GLSL **mix** function we can blend between the original and desaturated color like this:
```
albedo.rgb = mix(albedo.rgb,
	CAST3(dot(vec3(0.11, 0.59, 0.3), albedo.rgb)),
	u_DesaturationAmount);
```
* Click on **OK** in the shader editor and you're done.

## Result
Your new effect now has a slider that allows you to tweak the amount of desaturation easily and you can even bind a script or a user property to it.
