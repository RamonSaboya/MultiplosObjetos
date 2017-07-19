var c = document.getElementById("myCanvas");
var height = document.getElementById("canvas").clientHeight;
var width = document.getElementById("canvas").clientWidth;

/* Set canvas height and width to match div stage */
c.height = height;
c.width = width;

var ctx = c.getContext("2d");

var paint = function(x, y, color) {
  var s = convertToHex(color);
  ctx.fillStyle = s;
  ctx.fillRect(x, y, 1, 1);
}

var convertToHex = function(color) {
  var red = color.red.toString(16);
  var blue = color.blue.toString(16);
  var green = color.green.toString(16);

  var s = '#' + red + green + blue;
  return s;
}
