var c = document.getElementById("myCanvas");
var height = document.getElementById("canvas").clientHeight;
var width = document.getElementById("canvas").clientWidth;

/* Set canvas height and width to match div stage */
c.height = height;
c.width = width;

var ctx = c.getContext("2d");

var draw = function() {
  paint.forEach(function(obj){
    ctx.fillStyle='red';
    ctx.fillRect(obj.x,obj.y,1,1);
  });

  points2D.forEach(function(obj){
    obj.forEach(function(point){
      ctx.fillStyle="black";
      ctx.fillRect(point.x,point.y,1,1);
    })
  })
}

var paint = function(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}
