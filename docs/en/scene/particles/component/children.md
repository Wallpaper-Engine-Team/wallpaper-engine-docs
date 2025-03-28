---
prev: ../introduction.md
---

# Particle Component - Children

You can assign child particle systems to an existing particle system which can render once certain particle events have occurred.

## Child Particle System Configuration

Each child particle system has the following options:

* **Type:** The condition under which the child particle system is spawned.
* **Offset:** The position offset at which child particle systems are spawned at.
* **Angles:** The angle at which child particle systems are spawned.
* **Scale:** The scale at which child particle systems are spawned.
* **Max count:** The maximum number of child particle systems.
* **Probability:** The chance at which the child particle system is spawned when the event condition is met. `0.00` represents a 0% chance and `1.00` a 100% chance.
* **Set control points:** When enabled, the child particle system will use the control points of the parent particle system. Allows you to use control points of the parent within a child particle system.
    * **Control point start index:** The control point index which starts to override the child particle system control points. For example, if you set this value to `5`, then control points 5, 6 and 7 will be copied to the child particle system and the rest will remain independent.