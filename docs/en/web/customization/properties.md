---
sidebarDepth: 2
---

# User Properties

Wallpaper Engine allows you to make parts of your wallpaper configurable by your users by adding so called *user properties* to your project. These user properties appear on the right-hand side when a user selects your wallpaper in the Wallpaper Engine **Installed** tab. In this guide, we will explain how to create properties, what each property type represents and how to access them through JavaScript.

## Creating User Properties

You can create new properties by opening your web project in the Wallpaper Engine editor, navigating to the **Edit** menu at the top and selecting **Change Project settings**. You can then create a new property by clicking on the **Add Property** button. The following user property types are available for creation:

* Color (`color`) - A color picker
* Slider (`slider`) - A slider that allows users to select a number within a specified range
* Checkbox (`bool`) - A checkbox that is either off or on
* Combo (`combo`) - A dropdown selector where each element has a text and a hidden value
* Text (`textinput`) - A text input field
* File (`file`) - A file selector to import an image or a video
* Directory (`directory`) - A directory selector to mass import files

The following screenshot shows what it looks like when you add each property to your wallpaper as shown in the order above:

![Web User Properties](/img/tutorials/web_properties.jpg)

## Reading property values

You can utilize the [wallpaperPropertyListener](/web/api/propertylistener) and its `applyUserProperties` which is triggered whenever a user changes a property that you have added to your wallpaper or when the wallpaper is first loaded. The event only contains properties that have changed their value, so it's important to always check if a property is included like in the example below (`yourproperty` and `anotherproperty` should be replaced with the actual key of your properties).

```js
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.yourproperty) {
            // Do something with yourproperty
        }
        if (properties.another_property) {
            // Do something with anotherproperty
        }
        // Add more properties here
    }
};
```

The key used to access the properties is automatically generated when you create a property. You can use the edit button on the right-hand side of the element to edit it before the property has been created. The key cannot contain any special characters and only allows for English and numeric characters. 

Especially if you give your property a foreign title or use special characters, you should set a custom key that makes it easy to understand what the property key represents:

![User Property Key](/img/tutorials/web_property_key.png)

## Property Overview

https://steamcommunity.com/sharedfiles/filedetails/?id=785994149
https://steamcommunity.com/sharedfiles/filedetails/?id=795674740

Explain all options

### Color property
### Slider property
### Checkbox property
### Combo property
### Text property
### File property
### Directory property