
# Textures

You can add additional texture sampler to your effect. They can be hidden and linked to internal render targets or default texture, you can make them visible and allow users to import a texture or you can make them paintable and allow users to paint an opacity mask or a flow map in the editor.

## Define New Texture
```
uniform sampler2D g_Texture0; // { "material" : "texturekey", "label" : "Texture name in editor" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.

## Hidden Texture
Making a texture hidden will prevent the user from changing it.
```
uniform sampler2D g_Texture0; // { "material" : "texturekey", "label" : "Texture name in editor", "default" : "util/noise", "hidden":true }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"default" : "util/noise"**: The default texture to load if the user hasn't specified a different one.
* **"hidden" : true**: Hides the texture in the editor.

To declare a hidden texture, add the option **"hidden"** and set it to **true**. Additionally you want to specify a default texture or render target. In this example the stock noise texture is used.

## Visible Texture
A visible texture can be changed by the user.
```
uniform sampler2D g_Texture0; // {"material" : "texturekey", "label" : "Texture name in editor", "default" : "util/white" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"default" : "util/white"**: The default texture to load if the user hasn't specified a different one.

## Visible Texture With Painting
There are three different paint modes: **opacity**, **rgb** and **flow**
### Opacity
```
uniform sampler2D g_Texture0; // { "material" : "texturekey", "label" : "Texture name in editor", "mode" : "opacitymask", "combo" : "OPACITYMASK", "paintdefaultcolor":"0 0 0 1" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material":"texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label":"Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"mode":"opacitymask"**: Sets the texture up to be painted in grayscale with a single channel to read from.
* **"combo":"OPACITYMASK"**: Defines a combo that will be set to 1 if the user has painted something or selected a texture and set to 0 if no texture is bound.
* **"paintdefaultcolor":"0 0 0 1"**: Defines what color should be applied when the user begins to paint a new texture.

### RGB
```
uniform sampler2D g_Texture0; // { "material" : "texturekey", "label" : "Texture name in editor", "mode" : "rgbmask", "combo" : "RGBMASK", "paintdefaultcolor" : "1 0 0 1" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material":"texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"mode" : "rgbmask"**: Sets the texture up to be painted in rgb.
* **"combo" : "RGBMASK"**: Defines a combo that will be set to 1 if the user has painted something or selected a texture and set to 0 if no texture is bound.
* **"paintdefaultcolor" : "1 0 0 1"**: Defines what color should be applied when the user begins to paint a new texture.

### Flow Mask
```
uniform sampler2D g_Texture0; // {"material" : "texturekey", "label" : "Texture name in editor", "mode" : "flowmask", "combo" : "FLOWMASK" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material":"texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"mode" : "flowmask"**: Sets the texture up to be painted with directional information in R and G channels. B is not used.
* **"combo" : "FLOWMASK"**: Defines a combo that will be set to 1 if the user has painted something or selected a texture and set to 0 if no texture is bound.

:::  tip
You can convert the flow color to a direction by doing
```
vec2 flowMask = (flowColors.rg - vec2(0.498, 0.498)) * 2.0;
```
This is necessary because the integer idle flow color is 127, 127.
:::
