# Particle System Sprite Sheets

Particle systems allow you to make use of sprite sheets in two different ways. You can either use them to create animated particle sequences or you can use each individual sprite image as a randomized particle texture. In this guide, we will cover both cases.

## Animated Image Sequence

For our sprite sheet sequence, we will create an explosion particle based on the following sprite sheet:

![Explosion Sprite Sheet](/img/assets/explosion_sprite.png)

The sprite sheet has a resolution of 1025 x 1025 pixels. Since it has 5 rows and 5 columns, it means each sprite is exactly 205 x 205 pixels in size. It is crucial that the total resolution of the sprite sheet is cleanly divisible by the number of items.

## Randomized Particles 

![Space Ships](/img/assets/space_ships_spritesheet.png)