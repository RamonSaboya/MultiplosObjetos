var c = document.getElementById("myCanvas");

/* Set canvas height and width to match div stage */
c.height = document.getElementById("canvas").clientHeight;
c.width = document.getElementById("canvas").clientWidth;

var ctx = c.getContext("2d");

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
