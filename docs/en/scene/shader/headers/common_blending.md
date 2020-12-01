
# common_blending.h

You can use this header to add a **Blendmode** combo box to your shader.

## Add Required Combo Option
The following combo option must be added for this to work:
```
// [COMBO] {"material":"ui_editor_properties_blend_mode","combo":"BLENDMODE","type":"imageblending","default":0}
```

## Use Blending
Then you will be able to apply blending to a **vec3 colorA** and a **vec3 colorB** variable like this:
```
colorA = ApplyBlending(BLENDMODE, colorA, colorB, blend);
```

* The blend mode **BLENDMODE** is the combo value and must be placed as the first parameter, always. The internal function ignores this parameter, but it had to stick for backward compatibility. This can't be changed because it will not compile anymore if the compiler would have to sort it out.
* The fourth parameter **blend** controls the amount of blending where 0 will not modify **colorA** and 1 will fully apply **colorB** according to the selected blend mode.
