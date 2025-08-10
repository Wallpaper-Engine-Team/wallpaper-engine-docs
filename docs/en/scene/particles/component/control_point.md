---
prev: ../introduction.md
---

# Particle Component - Control Points

Control points are reference points that you can use to interact with the particle system from a certain point in your wallpaper. For example, you can turn the mouse cursor into a control point and let the particles react to mouse cursor movement. You can also create particle around or in between two control points.

Each particle system has 8 control points that you can use, numbered from `0` to `7`.

::: warning Special Case: Control Point 0
**Control point 0** is always tied to the origin position of the particle system. If you want to use a control point and move it around dynamically (by attaching it to the mouse cursor, for example), you need to use control point 1 or higher.
:::

<video width="90%" style="margin:0 auto;display:block;" controls loop autoplay>
  <source src="/videos/particle_control_point.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The **Discharge** particle system shown in the video above is one of the standard particle systems in Wallpaper Engine which uses control points to create lighting bolts between two control points.

## Configuring Control Points

Wallpaper Engine offers 8 control points per particle system, these are numbered from `0` to `7`. Each control point can be configured individually:

* **Offset:** The (relative) position of the control point.
* **Lock to pointer:** If enabled, the control point becomes locked to the mouse cursor.
* **Worldspace:** If enabled, the control point can be configured independently from the particle system. Useful if you want to place the control point in a fixed position somewhere in your wallpaper instead of having it relative to the particle system.
* **Copy from parent:** Copies the position of a control point in the parent particle system.
  * **Parent control point index:** The control point in the parent particle system to copy (`0` - `7`)
* **Raw value:** Disables adjusting the parent control point values into the coordinate space of the child particle system and just copies the raw control point values.
* **Hide gizmo from editor:** Control points show a draggable element in the editor window. By enabling this option, this control element will be hidden to clean up the editor space and to prevent accidental misplacement of the control point.

Once a control point is assigned, a dragable gizmo will become visible in the editor as shown in the sample video above. You can also animate the control point position by assigning a timeline animation and SceneScript logic.

## Using Control Points

There are multiple particle system components that allow you to utilize control points. You will find control points in the following particle system components:

#### Initializers
* **Position around control point:** Spawns particles around a control point.
* **Position between control points:** Spawns particles between two control points.

#### Operators
* **Control Point Force:** Acts upon articles with a force, allowing you to push or pull particles when they come near the control point. When the control point is bound to the mouse cursor, allows you to push particles away.
* **Vortex**: Creates a vortex movement which you can lock to a control point to position the vortex independently from the rest of the particle system.