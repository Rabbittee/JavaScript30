# Day19 

## `MediaDevices.getUserMedia()` 

prompts the user for permission to use a media input
which produces a `MediaStream` with tracks containing the requested types of media.

That stream can include, for example,
- a video track 
    produced by either a hardware or virtual video source 
    such as a camera, video recording device, screen sharing service, and so forth
- an audio track
    similarly, produced by a physical or virtual audio source 
    like a microphone, A/D converter, or the like
and possibly other track types.

It returns a `Promise` that resolves to a `MediaStream` object.
If the user denies permission, or matching media is not available,
then the promise is rejected with `NotAllowedError` or `NotFoundError` 
`DOMException` respectively.

### Syntax

```js
var promise = navigator.mediaDevices.getUserMedia(constraints);
```

#### Parameters

##### `constraints`

An object specifying the types of media to request,
along with any requirements for each type.

The `constraints` parameter is an object with two members: `video` and `audio`,
describing the media types requested.
Either or both must be specified.
If the browser cannot find all media tracks with the specified types
that meet the constraints given,
then the returned promise is rejected with `NotFoundError` `DOMException`.


## Image Processing

### Grayscale

```
grayscale = (r + g + b) / 3
```