function Point3D (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.normal = new Vector(0, 0, 0);
}

Point3D.prototype.clonePoint = function() {
  return new Point3D(this.x, this.y, this.z);
};

Point3D.prototype.baseChange = function(camera) {
  var pWorld = this.clonePoint();
  
  var v = pWorld.subtraction(camera.c);
  
  var pView = v.matrixProduct(camera.alpha);
  
  return pView;
};

Point3D.prototype.subtraction = function(point){
  var x = this.x - point.x;
  var y = this.y - point.y;
  var z = this.z - point.z;

  return new Point3D(x, y, z);  
};

Point3D.prototype.matrixProduct = function(matrix) {
  var x = (this.x * matrix[0][0]) + (this.y * matrix[0][1]) + (this.z * matrix[0][2]);
  var y = (this.x * matrix[1][0]) + (this.y * matrix[1][1]) + (this.z * matrix[1][2]);
  var z = (this.x * matrix[2][0]) + (this.y * matrix[2][1]) + (this.z * matrix[2][2]);

  return new Point3D(x, y, z);
};

