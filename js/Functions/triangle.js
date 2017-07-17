function Triangle (point1, point2, point3) {
  this.point1 = point1;
  this.point2 = point2;
  this.point3 = point3;
  this.normal = new Vector(0, 0, 0);
}

Triangle.prototype.setNormal = function(){
  var x1 = this.point2.x - this.point1.x;
  var y1 = this.point2.y - this.point1.y;
  var z1 = this.point2.z - this.point1.z;
  var ab = new Vector(x1, y1, z1);

  var x2 = this.point3.x - this.point2.x;
  var y2 = this.point3.y - this.point2.y;
  var z2 = this.point3.z - this.point2.z;
  var bc = new Vector(x2, y2, z2);

  this.normal = ab.vectorProduct(bc);
  this.normal.normalize();
}
