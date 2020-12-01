
# Combo Options

Combos can be used to create different permutations for the shader by omitting or changing code before it gets compiled. For example, this is useful to define different render paths that don't need to be able to change at runtime. Or to change the number of iterations in loops, which can drastically improve compile time, since any loops should use a fixed number of iterations.

You can declare a combo as a checkbox or as a combo box with an arbitrary number of options to choose from.

## Combo Checkbox
```
// [COMBO] {"material":"My Combo Name","combo":"USERCOMBOIDENTIFIER","type":"options","default":0}
```
* **My Combo Name**
Name of the combo shown in the editor.
* **USERCOMBOIDENTIFIER**
This is the directive define symbol name that will be set, i.e. **#define USERCOMBOIDENTIFIER 0** will be set by Wallpaper Engine for you so you can check for **#if USERCOMBOIDENTIFIER == 0**.
* **"default":0**
Whether the checkbox is checked by default, use 1 to set it checked.

## Combo Combo Box
```
// [COMBO] {"material":"My Combo Name","combo":"USERCOMBOIDENTIFIER","type":"options","default":0,"options":{"Option A":0,"Option B":1}}
```
* **My Combo Name**: Name of the combo shown in the editor.
* **USERCOMBOIDENTIFIER**: This is the directive define symbol name that will be set, i.e. **#define USERCOMBOIDENTIFIER 0** will be set by Wallpaper Engine for you so you can check for **#if USERCOMBOIDENTIFIER == 0**.
* **"default":0**: Which of the options will be selected by default.
* **"options":{...}**: This is an object that defines all available options. In this example there are two options named **Option A** and **Option B** with the values **0** and **1** respectively. You can change the names and values as you like and add additional options too. The defined symbol will be set to the value that corresponds to the selected option.
