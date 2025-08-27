---
prev: ../../reference.md
---

# SceneScript Class MediaPlaybackEvent

This object describes a media playback event, which fires whenever the user starts, stops or pauses their media playback.

## Properties

### state: Number

The current state of the media session. This can be one of three values:

* `MediaPlaybackEvent.PLAYBACK_PLAYING` - Media is actively playing on the system.
* `MediaPlaybackEvent.PLAYBACK_PAUSED` - Media was previously playing, but playback was (temporarily) paused by the user.
* `MediaPlaybackEvent.PLAYBACK_STOPPED` - Media playback is completely stopped.

For a concrete example, see the `mediaPlaybackChanged` event description here:

* [SceneScript Media Integration Events](/en/scene/scenescript/reference/event/media.html#mediaplaybackchanged)