---
prev: ../introduction.md
---

# Particle Component - Children

You can assign child particle systems to an existing particle system which can render once certain particle events have occurred.

## Child Particle System Configuration

Each child particle system has the following options:

* **Type:** The condition under which the child particle system is spawned:
    * **Static:** The child particle system will be automatically spawned once at the particle system origin.
    * **Event follow:** The child particle system will be created multiple times and follow individual particles of this system.
    * **Event spawn:** The child particle system is spawned at the same time particles of this system spawn.
    * **Event death:** The child particle system is spawned when a particle of this system reaches the end of its lifetime at its location.
* **Offset:** The position offset at which child particle systems are spawned at.
* **Angles:** The angle at which child particle systems are spawned.
* **Scale:** The scale at which child particle systems are spawned.
* **Max count:** The maximum number of child particle systems. Only relevant for event particles, which allow multiple child particles to be spawned.
* **Probability:** The chance at which the child particle system is spawned when the event condition is met. `0.00` represents a 0% chance and `1.00` a 100% chance.
* **Set control points:** When enabled, the child particle system will use the positions of this system's particles as its control points. This allows you to animate the control point positions with the entire complexity of the particle systems logic.
    * **Control point start index:** The control point index of the child particle system which gets overwritten first with the particle positions of this system. For example, if you set this to `5`, the control points with indices 5, 6 and 7 will receive a particle position update each frame.

You can also use the ["inherit value from event" initializer](/en/scene/particles/component/initializer.html#inherit-value-from-event) to copy certain parent particle properties onto their children. This is useful whenever you have dynamic properties that you want to carry over onto children (color, size or opacity, for example).