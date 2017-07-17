var c = document.getElementById("myCanvas");
var height = document.getElementById("canvas").clientHeight;
var width = document.getElementById("canvas").clientWidth;

/* Set canvas height and width to match div stage */
c.height = height;
c.width = width;

var ctx = c.getContext("2d");
