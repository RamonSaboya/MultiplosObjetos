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
  var plWorld = this.clonePoint();
  
  var v = plWorld.subtraction(camera.c);
  
  var plView = v.matrixProduct(camera.alpha);
  
  return plView;
};

Point3D.prototype.subtraction = function(point){
  var x = this.x - point.x;
  var y = this.y - point.y;
  var z = this.z - point.z;

  return new Point3D(x, y, z);  
};
