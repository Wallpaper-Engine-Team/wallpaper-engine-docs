# 3D Distance Fog

3D scenes allow you to enable distance fogging. This will fade out objects which are further away from the perspective of the user.

<video width="100%" controls loop autoplay>
  <source src="/videos/fog_distance.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

To enable distance fogging, click on the **Scene options** tab next to the **Layers** tab on the left-hand side of the editor. Scroll down to the **Distance Fog** section to enable it.

In a lot of scenarios, it makes sense to match the **Color** of the fog to the overall **Background color**, which you can also find the scene options. This allows for objects to smoothly blend into the sky, for example.

You can further adjust the distance fog by changing its settings:

* **Start**: Defines the distance from viewport at which the fogs starts to manifest.
* **End**: Defines the distance at which point the fog reaches its maximum value.
* **Start density**: Defines the minimum fog level at the **Start** distance.
* **End density**: Defines the maximum fog level at the **End** distance.

Adjust the distance fog to fit your scene's overall size, so that far away objects fade away smoothly.

## Height Fog

A variation of distance fog is **height fog**. You can find this feature just below **distance fog** in the Scene options, both can be enabled at the same time.

Height fog will set in at a predefined height, allowing you to fade-out objects which are higher up. Unlike distance fog, it is not relative to the user viewport but rather a global height setting for the scene.

<video width="100%" controls loop autoplay>
  <source src="/videos/fog_height.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

* **Start**: Defines the distance from 0 height at which the fog starts manifesting.
* **End**: Defines the height at which point the fog reaches its maximum value.
* **Start density**: Defines the minimum fog level at the **Start** height.
* **End density**: Defines the maximum fog level at the **End** height.
