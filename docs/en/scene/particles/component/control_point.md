---
prev: ../introduction.md
---

# Particle Component - Control Points

Control points are reference points that you can use to interact with the particle system from a certain point in your wallpaper. For example, you can turn the mouse cursor into a control point and let the particles react to mouse cursor movement. You can also create particle around or in between two control points.

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

Once a control point is assigned, a dragable gizmo will become visible in the editor as shown in the sample video above. You can also animate the control point position by assigning a timeline animation and SceneScript logic.

## Using Control Points

There are multiple particle system components that allow you to utilize control points. You will find control points in the following particle system components:

#### Initializers
* **Map sequence around control point:** Spawns particles around a control point.
* **Map sequence between control points:** Spawns particles between two control points.

#### Operators
* **Control Point Force:** Acts upon articles with a force, allowing you to push or pull particles when they come near the control point. When the control point is bound to the mouse cursor, allows you to push particles away.

#### Child Particle Systems

Child particle systems can be configured to spawn at a specific control point. Enable the **Set control points** option and assign a control point.