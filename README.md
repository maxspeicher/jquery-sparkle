# jquery-sparkle
A jQuery plug-in that lets you add a sparkle effect to any element.

```javascript
$("#main").sparkle({
  fill: "#fff", // fill color of the star that makes up the sparkle effect (default: #fff)
  stroke: "#000", // outline color of the star (default: #000)
  size: 20, // size of the sparkle effect in px (default: 20)
  delay: 0, // delay before first sparkle in ms (default: 0)
  duration: 1500, // duration of a sparkle in ms (default: 1500)
  pause: 1000 // delay between two sparkles in ms (default: 1000)
});
```

You can also add multiple sparkles (with different properties) to the same element:

```javascript
$("#main").sparkle({
  size: 30
}).sparkle({
  size: 30
}).sparkle({
  delay: 1000,
  size: 10,
  pause: 750
});
```

The sparkle effect can be removed using the following option:

```javascript
$("#main").sparkle("destroy");
```

See CodePen for the original implementation of the plug-in: http://codepen.io/maxspeicher/pen/zrVKLE
