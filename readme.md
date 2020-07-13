# p5 Simply Centered

Simply Centered is a javascript library for centering a canvas in the window when using the p5.js library.

## Installation

Drop the p5.simpleCentered.js file into your p5 project directory and then link it to your html file by pasting this line into the header.

```html
<script src="p5.simplyCentered.js" type="text/javascript"></script>
```

Make sure you place this above where your script.js file is linked.

## Usage

```javascript
let canvas = createCenteredCanvas(width, height, centerVertically, useFlex);
```

centerVertically defaults to false. Set to true if you would like to center the canvas vertically in the window.

useFlex defaults to true. If your browser does not support flexbox then set this to false. 

centerVertically will not work if useFlex is true unless the parent element of the canvas wrapper (<body> by default) has a defined height.

If your canvas is the only other element on the page set centerVertically to true and useFlex to false.

## License

[MIT](https://choosealicense.com/licenses/mit/)
