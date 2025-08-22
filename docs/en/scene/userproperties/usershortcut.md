# User Shortcut Property

The user shortcut property is a special type of user property since it does not directly alter the look-and-feel of the wallpaper itself. Instead, it allows users themselves to define a shortcut to a file, directory, web page or console command. The shortcuts can be triggered only through a click event in [*SceneScript*](/en/scene/scenescript/introduction.html), which makes this feature reserved for more advanced users.

In this guide, we will be creating the following sample wallpaper. Users will be able to choose to configure up to 4 shortcuts which will be displayed with a clickable icon and a shortcut label:

<video width="100%" controls loop autoplay>
  <source src="/videos/property_user_shortcut.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


We recommend using this feature only when it really fits the purpose of the wallpaper. Wallpaper Engine is primarily a wallpaper tool and ordinary wallpapers should not be overloaded with user shortcuts. Hiding shortcut elements for users who do not wish to utilize them is good practice.

::: warning Good to know
For security reasons, user shortcuts are bound to a specific system. They cannot be shared across computers and they are ignored as part of wallpaper presets that you create. Users always need to manually configure these shortcuts for each system.
:::

## Getting started

In this guide, we will recreate the example from the video in multiple sections. Since this is an advanced tutorial, you are expected to have a basic understanding of how user properties work. If this is not the case, we strongly recommend you start with any other user property first to understand the basics of setting up a user property.

You can also download the full sample to help you better understand how to use this feature:

* [Click here to download the sample project](/samples/user_property_sample.zip)

### 1. Setting up the user property

To get started with this feature, first create a user shortcut property. If you want to create multiple shortcuts, we recommend sticking to a clear naming scheme and structure.

In the Wallpaper Engine editor, click on **Edit** in the top row, followed by **Change Project Settings**. In the **User Properties** section at the bottom, click on **Add Property**. and select **User shortcut** from the list. Give your user shortcut a sensible name, in our case we create four shortcuts labeled **Shortcut #1**, **Shortcut #2**, **Shortcut #3** and **Shortcut #4**.

Take note of the user property key that is automatically generated for each user property, you will need it at a later step.

### 2. Creating a clickable element 

Next, we need a clickable layer. The best candidates for this are:

* **Image Layer:** Just a standard image layer with a clickable button-like element.
* **Solid Placeholder Layer:** A placeholder that is initially shown as a single color.

In this example we will work with a **Solid Placeholder** layer since we want to hide our clickable button when the user is not using this element. Placeholder layers are good candidates for this since they occupy very little memory when they are unused.

To get started, click on **Add Asset** on the left-hand side of the editor and find **Solid Placeholder** in the list. Before creating the layer, make sure to configure a square resolution (since icons are always square). Make sure the resolution is not too large, we recommend not creating icons above `180 x 180 px`. In our example, we will use `180px x 180px` but you might want to use lower resolutions like `64px x 64px` to ensure that icons do not get too large.

### 3. Making our layer clickable

Unlike any other user property, you do not actually need to bind it to any element for this feature to work. Instead, we need to utilize [SceneScript](/en/scene/scenescript/introduction.html) to get the most basic functionality to work. If you have never worked with SceneScript before, do not worry, we will explain the necessary steps in this guide.

Essentially, we need to register click functionality on each clickable element and then tell Wallpaper Engine to open the user shortcut in this click function. To get started, select your clickable layer and in the upper right corner, next to the eye symbol, click on the cogwheel icon and select **Bind Script**. The SceneScript editor with an empty sample code snippet will appear now.

Replace the sample `update()` function with the following code (or add it below the existing code):

```js
/**
 * @param {CursorEvent} event
 */
export function cursorClick(event) {
	// you can run a *single* command in one click/up/down CursorEvent, other events are blocked
	engine.openUserShortcut("shortcut1");
}
```

As you can see, we are registering the cursor click event on this element which is automatically triggered when a user clicks on the layer. And within that event, we simply call the [engine.openUserShortcut()](/en/scene/scenescript/reference/class/IEngine.html#openusershortcut-userpropertyname-string-boolean) function with the key of our user property. If you have given your user property a different name and key, make sure to replace `shortcut1` with the correct key. Repeat this process for all clickable buttons and always open the correct user shortcut key.

To test this basic version, confirm your SceneScript code by clicking **OK**. Next, preview the wallpaper on your desktop by clicking on **File** in the editor, followed by **Apply wallpaper**. You can now configure the user shortcut property like any user on the right-hand side in the standard Wallpaper Engine window and verify that your click event works. When clicking on your element, your shortcut should now work.

### 4. Optional: Adding the user shortcut icon to your wallpaper

In our example, we also want the icon of the user shortcut to be represented on our clickable elements. This is completely optional, you can also choose to fully rely on your own images instead for design reasons.

To bind the user shortcut icon to your layer, select the layer and on the right-hand side, scroll down to the **Advanced Texture Settings**. Next to the **Albedo** texture, click on the cogwheel icon and select **Bind User Property**. You will now be presented with a list of your **User Shortcut** properties, assign the correct one by clicking on the radio button left of the desired property.

When applying your wallpaper to the desktop and after assigning a user shortcut, it will now render the icon of your shortcut within the layer.

Make sure to make your layer square and not larger than `180 x 180 pixels`, since this is the highest icon resolution you can expect in many scenarios.

### 5. Optional: Hiding the clickable element when unused

Optionally, you can also hide the entire element whenever a user has not assigned an icon to remove clutter from your wallpaper. To do this, we once again need to utilize SceneScript. Select your layer, and once again click on the cogwheel icon next to the eye symbol in the upper right corner and select **Edit Script**.

We now need to utilize the [applyUserProperties](/en/scene/scenescript/reference/event/applyUserProperties.html) event. This event watches any changes to user properties, so we can monitor when the user assigns a shortcut. You can copy the following function into the script. **Please note:** Make sure to adjust the **two** references to the shortcut to match your key. In the following snippet, you will find `shortcut1` in two places that you need to adjust to match your property key:

```js
'use strict';

/**
 * @param {Object} changedUserProperties - only includes user properties that were recently changed!
 */
export function applyUserProperties(changedUserProperties) {
	// Hide layer while user property is unbound
	if (changedUserProperties.hasOwnProperty('shortcut1')) {
		if (changedUserProperties.shortcut1.isbound) {
			thisLayer.visible = true;
		} else {
			thisLayer.visible = false;
		}
	}
}
```

As you can see, each shortcut sends an `isbound` value that you can use to determine whether or not the user has assigned the shortcut. If the shortcut is assigned, we set the layer visibility to `true`, otherwise we set the visibility to `false`.

You can also amend this functionality to hide your user shortcuts when shown on screensavers to reduce visual clutter by checking for `engine.isScreensaver()`:

```js
if (changedUserProperties.shortcut1.isbound && !engine.isScreensaver()) {
```

### 6. Optional: Rendering the shortcut label to a text layer

Additionally, we can also render the label (file name, directory name, website URL or console command) into a text layer.

First, create a text layer that you want to show the shortcut label in and give it a relevant name. In our case, we create a text layer for each button and name in line with our four shortcuts: `shortcut1_label`, `shortcut2_label`, `shortcut3_label`, `shortcut4_label`.

Next, we once again have to go back to our clickable image layers. Similar to step 5, we edit our SceneScript code and use the same [applyUserProperties](/en/scene/scenescript/reference/event/applyUserProperties.html) function as before.

First, we need to find our text layer by using the `thisScene.getLayer()` function. This is why it is important to give the text layers structured names, make sure to replace `shortcut1_label` with whatever you have chosen to name your first text layer. We then assign the text of this layer to the `file` property of our shortcut (also make sure to adjust `shortcut1` to your shortcut label here):

```js
thisScene.getLayer("shortcut1_label").text = changedUserProperties.shortcut1.file;
```

Whenever our user shortcut is not bound, we set the text layer to an empty text:

```js
thisScene.getLayer("shortcut1_label").text = "";
```

When combined with step 5, our code now looks like this:

```js
/**
 * @param {Object} changedUserProperties - only includes user properties that were recently changed!
 */
export function applyUserProperties(changedUserProperties) {
	// Hide layer while user property is unbound
	if (changedUserProperties.hasOwnProperty('shortcut1')) {
		if (changedUserProperties.shortcut1.isbound) {
			thisLayer.visible = true;
			thisScene.getLayer("shortcut1_label").text = changedUserProperties.shortcut1.file;
		} else {
			thisLayer.visible = false;
			thisScene.getLayer("shortcut1_label").text = "";
		}
	}
}
```

Whenever `shortcut1` is assigned by the user (represented by the `isbound` value), we set the text element of our `shortcut1_label` to the `file` value of `shortcut1`. And whenever it is not assigned, we simply assign an empty `""` string to our text layer.

If you want to look at the full solution as a reference, be sure to download our sample project:

* [Click here to download the sample project](/samples/user_property_sample.zip)