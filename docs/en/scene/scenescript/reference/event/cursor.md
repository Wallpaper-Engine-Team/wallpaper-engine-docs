---
prev: ../../reference.md
---

# SceneScript Cursor Events

SceneScript offers multiple cursor events that allows you to interact with mouse movements and mouse clicks. The parameter for all cursor events is an [ICursorEvent](/scene/scenescript/reference/class/ICursorEvent) object with additional event data.

All mouse cursor events will only work on objects marked as **Solid** in the layer settings. 

[[toc]]

## cursorEnter

This event function will be called when the cursor enters the bounds of the object.

```js
export function cursorEnter(event: ICursorEvent) {

}
```

## cursorLeave

This event function will be called when the cursor leaves the bounds of the object.

```js
export function cursorLeave(event: ICursorEvent) {

}
```

## cursorMove

This event function will be called when the cursor has been moved.

```js
export function cursorMove(event: ICursorEvent) {

}
```

## cursorDown

This event function will be called when the cursor is being pressed down on an object.

```js
export function cursorDown(event: ICursorEvent) {

}
```

## cursorUp

This event function will be called when the cursor is being released over an object.

```js
export function cursorUp(event: ICursorEvent) {

}
```

## cursorClick

This event function will be called when the cursor has been pressed and released on the same object. The event is triggered after the `cursorUp` and `cursorDown` event have been executed.

```js
export function cursorClick(event: ICursorEvent) {

}
```