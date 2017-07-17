var points = [];
var triangles = [];

var startObject = function(file, order) {
  points[order] = [];
  triangles[order] = [];
  var qtds = file.split("\n")[0];
  var qtdPoints = parseInt(qtds.split(" ")[0]);
  var qtdTriangles = parseInt(qtds.split(" ")[1]);

  var line, x, y, z, point, triangle;
  for(i = 1; i < qtdPoints+qtdTriangles+1; i++){
    line = file.split("\n")[i];
    x = line.split(" ")[0];
    y = line.split(" ")[1];
    z = line.split(" ")[2];
    
    if(i < qtdPoints+1) {
      point = new Point3D(x, y, z);
      points[order].push(point);
    } else {
      triangle = new Triangle(x-1, y-1, z-1);

      /* Saving the triangles that each point belongs to */
      points[order][x-1].triangles.push(triangle);
      points[order][y-1].triangles.push(triangle);
      points[order][z-1].triangles.push(triangle);

      triangles[order].push(triangle);
    }
  }
}
