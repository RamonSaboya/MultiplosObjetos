var points = [];
var triangles = [];
var fileName;

var startObject = function(file) {
  /* The string that will store the file information */
  var string;
  fileName = file.name;
  console.log('Lendo objeto ' + fileName)

  reader.readAsBinaryString(file);

  /* The read function from reader is asynchronous, so we must wait until it finishes */
  reader.onloadend = function(event) {
    string = reader.result;

    /* We need to know which is the order of the object so that we can properly store it */
    var order = curObj;

    points[order] = [];
    triangles[order] = [];

    /* Get the first line of number of points and triangles on the file */
    var qtds = string.split("\n")[0];
    var qtdPoints = parseInt(qtds.split(" ")[0]);
    var qtdTriangles = parseInt(qtds.split(" ")[1]);

    var line, x, y, z, point, triangle;
    for(i = 1; i < qtdPoints+qtdTriangles+1; i++){
      line = string.split("\n")[i];
      x = line.split(" ")[0];
      y = line.split(" ")[1];
      z = line.split(" ")[2];

      if(i < qtdPoints+1) {
        point = new Point3D(x, y, z);
        point.index = i;
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
    startCamera();
  }
}
