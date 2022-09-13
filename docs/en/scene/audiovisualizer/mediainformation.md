# Working with Media Playback Data

This guide builds on top of the [Album Cover Integration](/en/scene/audiovisualizer/albumcover.md) feature. While you do not need to incorporate album covers into your wallpaper for any of the topics discussed here, we still recommend you read the album cover guide first before you continue here. This guide builds on top of the album cover guide but you can use all features completely independently from each other.

## Displaying Song Title, Album Title & Artist Title

In this section, we will discuss how to add certain song information to your wallpaper. Please note that some data may not be available if it is not transmitted by the respective media player or if the audio file does not include certain pieces of information. For example, there is no guarantee that a song file includes an album title.

### Creating the Text Element

To get started, we need to create text layers for each element that we want to show. Click on **Add asset** on the left-hand side and add a new **Text layer** to your wallpaper.

One thing that you need to keep in mind with text layers with dynamic content is that they could potentially become very long. This is why it is important that you properly configure the text layer:

1. Adjust the **Point size** value to change the size of the text layer. Do not change the **Scale** of the text layer, it will reduce the quality of the text unnecessarily.
2. Set the **Horizontal alignment** to *left* and adjust the position of the text to account for this change.
3. Enable the **Max width** option and re-adjust the maximum width using the purple dotted line that appears in the editor. This is especially important when working with dynamic text such as song titles, as they can be very long.
4. Enable the **Max rows** option and set the limit to *1* (or another value of choice).
5. Lastly, you might want to enable the **Overflow ellipsis** option. This will cut off text that is too long and replace the end with three dots "..." to make it clear that the text was cut off.

You can see the setup and the end result of this in the following video:

<video width="100%" controls>
  <source src="/videos/media_text_settings.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Hiding Media Playback Elements