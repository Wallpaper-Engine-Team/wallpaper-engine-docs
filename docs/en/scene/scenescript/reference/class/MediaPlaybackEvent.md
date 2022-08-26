---
prev: ../../reference.md
---

# SceneScript Class MediaPlaybackEvent

This object describes a media playback event, which fires whenever the user starts, stops or pauses their media session.

## Properties

### state: Number

The current state of the media session. This can be one of three values: `MediaPlaybackEvent.PLAYBACK_STOPPED`, `MediaPlaybackEvent.PLAYBACK_PLAYING` or `MediaPlaybackEvent.PLAYBACK_PAUSED`.

### primaryColor: Vec3

Primary color of the thumbnail image as normalized RGB vector.

### secondaryColor: Vec3

Secondary color of the thumbnail image as normalized RGB vector.

### tertiaryColor: Vec3

Tertiary color of the thumbnail image as normalized RGB vector.
