var points = [];
var triangles = [];

var startObject = function(file, order) {
  points[order] = [];
  var qtds = file.split("\n")[0];
  var qtdPoints = parseInt(qtds.split(" ")[0]);
  var qtdTriangles = parseInt(qtds.split(" ")[1]);

  var line, x, y, z, point, triangle;
  for(i = 1; i < qtdPoints+qtdTriangles; i++){
    line = file.split("\n")[i];
    x = line.split(" ")[0];
    y = line.split(" ")[1];
    z = line.split(" ")[2];
    if(i < qtdPoints+1) {
      point = new Point3D(x, y, z);
      points[order].push(point);
    } else {
      // triangle = new Triangle(x, y, z);
      // triangles[order].push(triangle);
    }
  }
  console.log(points);
}

var test = function(){
  console.log(values);
}
