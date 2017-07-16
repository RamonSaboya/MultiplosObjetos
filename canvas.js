var c = document.getElementById("myCanvas");
var reader = new FileReader();

/* Set canvas height and width to match div stage */
c.height = document.getElementById("canvas").clientHeight;
c.width = document.getElementById("canvas").clientWidth;

var ctx = c.getContext("2d");

var addFile = function() {
  var x = document.getElementById("myFile");
  var file;
  if ('files' in x) {
    for (var i = 0; i < x.files.length; i++) {
      file = x.files[i];
    }
  }
  reader.readAsBinaryString(file);
}

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
