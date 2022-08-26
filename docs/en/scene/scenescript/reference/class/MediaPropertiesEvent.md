---
prev: ../../reference.md
---

# SceneScript Class MediaPropertiesEvent

This object describes a media properties event that will be fired when the currently playing media session in Windows changes. The available members depend on the application firing the event. Typically only title, artist and contentType will be available.

## Properties

### title: String

Title of the currently playing media.

### artist: String

Artist of the currently playing media.

### subTitle: String

Optional sub title of the currently playing media.

### albumTitle: String

Optional album title of the currently playing media.

### albumArtist: String

Optional album artist of the currently playing media.

### genres: String

Optional comma separated list of genres describing the currently playing media.

### contentType: String

The type of media, can either be music, video or image.
