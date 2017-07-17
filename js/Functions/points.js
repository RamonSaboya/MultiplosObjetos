function Point3D (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.triangles = [];
  this.normal = new Vector(0, 0, 0);
}

function Point2D (x, y, i) {
  this.x = x;
  this.y = y;
  this.index = i;
  this.normal = new Vector(0, 0, 0);
}

// funcoes de pontos 3D
Point3D.prototype.changeBase = function(triangles, i) {
  var pWorld = this;
  var v = pWorld.subtraction(camera.c);
  var pView = v.matrixProduct(camera.alpha);
  pView.triangles = triangles;
  pView.index = i;
  
  return pView;
}

Point3D.prototype.subtraction = function(point){
  var x = this.x - point.x;
  var y = this.y - point.y;
  var z = this.z - point.z;

  return new Point3D(x, y, z);
}

Point3D.prototype.matrixProduct = function(matrix) {
  var x = (this.x * matrix[0][0]) + (this.y * matrix[0][1]) + (this.z * matrix[0][2]);
  var y = (this.x * matrix[1][0]) + (this.y * matrix[1][1]) + (this.z * matrix[1][2]);
  var z = (this.x * matrix[2][0]) + (this.y * matrix[2][1]) + (this.z * matrix[2][2]);

  return new Point3D(x, y, z);
}

Point3D.prototype.transform2D = function() {
  var x = (camera.d / camera.hx) * (this.x / this.z);
  var y = (camera.d / camera.hy) * (this.y / this.z);

  x = (x + 1) * (width / 2);
  y = (1 - y) * (height / 2);

  var p2D = new Point2D(x, y, i);
  p2D.round();
  p2D.normal = this.normal;

  return p2D;

}

// funcoes de pontos 2D
Point2D.prototype.round = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
}
