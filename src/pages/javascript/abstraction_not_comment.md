# Use abstractions instead of comments

Instead of commenting what a piece of code does, create a function with
a name that describes what it does.

<br/>

The code below the comment might change without the comment, and in time,
the comment will become outdated, possibly wrong, and end up as a lie.

<br/>

```javascript
// enable dragging and dropping of images
window.addEventListener('dragover', preventDefault);
window.addEventListener('dragenter', preventDefault);
window.addEventListener('drop', files => controller.readDroppedFiles(files));
```

<br/>
Instead you should create a function with a good descriptive name.

```javascript
function enableDragAndDropOfImagesFiles(controller) {
  window.addEventListener('dragover', preventDefault);
  window.addEventListener('dragenter', preventDefault);
  window.addEventListener('drop', files => controller.readDroppedFiles(files));
}
```

<br/>
Then call that function. The comment is no longer needed.

```javascript
enableDragAndDropOfImagesFiles(controller);
```
