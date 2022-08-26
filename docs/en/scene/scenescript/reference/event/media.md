---
prev: ../../reference.md
---

# SceneScript Media Integration Events

SceneScript offers multiple media integration events that allow you to access information about currently playing music or videos on the PC. This will only be available for applications that integrate with the global Windows media session system. Users may also turn this feature off for privacy reasons.

[[toc]]

## mediaStatusChanged

This event function will be called when the media integration is turned on or off by the user. The event parameter is a [MediaStatusEvent](/scene/scenescript/reference/class/MediaStatusEvent).

```js
export function mediaStatusChanged(event: MediaStatusEvent) {

}
```

## mediaPlaybackChanged

This event function will be called when the users starts, stops or pauses media. The event parameter is a [MediaPlaybackEvent](/scene/scenescript/reference/class/MediaPlaybackEvent).

```js
export function mediaPlaybackChanged(event: MediaPlaybackEvent) {

}
```

## mediaPropertiesChanged

This event function will be called when the properties of the currently playing media change. The event parameter is a [MediaPropertiesEvent](/scene/scenescript/reference/class/MediaPropertiesEvent).

```js
export function mediaPropertiesChanged(event: MediaPropertiesEvent) {

}
```

## mediaThumbnailChanged

This event function will be called when the thumbnail of the currently playing media changes. The event parameter is a [MediaThumbnailEvent](/scene/scenescript/reference/class/MediaThumbnailEvent).

```js
export function mediaThumbnailChanged(event: MediaThumbnailEvent) {

}
```

## mediaTimelineChanged

**Optional**: this event function will be called when the current time of the playing media changes and is only provided by certain applications. The event parameter is a [MediaTimelineEvent](/scene/scenescript/reference/class/MediaTimelineEvent).

```js
export function mediaTimelineChanged(event: MediaTimelineEvent) {

}
```