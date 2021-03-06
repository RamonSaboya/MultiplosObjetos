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

Triangle.prototype.setAngularCoeficients = function() {
  this.ap1p2 = (this.point2.y - this.point1.y) / (this.point2.x - this.point1.x);
  this.ap2p3 = (this.point3.y - this.point2.y) / (this.point3.x - this.point2.x);
  this.ap3p1 = (this.point1.y - this.point3.y) / (this.point1.x - this.point3.x);
}

Triangle.prototype.setDistances = function() {
  this.dp1p2 = Math.sqrt(Math.pow(this.point1.x - this.point2.x, 2) + Math.pow(this.point1.y - this.point2.y, 2));
  this.dp2p3 = Math.sqrt(Math.pow(this.point2.x - this.point3.x, 2) + Math.pow(this.point2.y - this.point3.y, 2));
  this.dp3p1 = Math.sqrt(Math.pow(this.point3.x - this.point1.x, 2) + Math.pow(this.point3.y - this.point1.y, 2));
}

Triangle.prototype.orderVertices = function(){
  // var array = [];
  // array[0] = this.point1;
  // array[1] = this.point2;
  // array[2] = this.point3;
  //
  // var stop = false;
  // var aux;
  // while(!stop){
  //   for(i = 0; i < 2; i++){
  //     stop = true;
  //     if(array[i].y < array[i+1].y) stop = false;
  //     else if (array[i].y == array[i+1].y) {
  //       if (array[i].x < array[i+1].x) stop = false;
  //     }
  //     if(!stop) {
  //       aux = array[i];
  //       array[i] = array[i+1];
  //       array[i+1] = aux;
  //       stop = false;
  //     }
  //   }
  // }
  //
  // this.point1 = array[0];
  // this.point2 = array[1];
  // this.point3 = array[2];
  var aux;
  if(this.point1.y > this.point2.y) {
    aux = this.point1;
    this.point1 = this.point2;
    this.point2 = aux;
  }
  if(this.point1.y > this.point3.y) {
    aux = this.point1;
    this.point1 = this.point3;
    this.point3 = aux;
  }
  if(this.point2.y > this.point3.y) {
    aux = this.point2;
    this.point2 = this.point3;
    this.point3 = aux;
  }
}

Triangle.prototype.isTriangle = function() {
  return !((this.point1.x == this.point2.x && this.point1.y == this.point2.y) || (this.point1.x == this.point3.x && this.point1.y == this.point3.y) || (this.point2.x == this.point3.x && this.point2.y == this.point3.y));
}

Triangle.prototype.getBaricentricCoordinates = function(x, y, p1, p2, p3) {
  var denom = (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);

	var	alpha = ((x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (y - p3.y)) / denom;
	var	beta = ((p1.x - p3.x) * (y - p3.y) - (x - p3.x) * (p1.y - p3.y)) / denom;
	var	gamma = 1.0 - alpha - beta;

  var coeficients = {
    alpha: alpha,
    beta: beta,
    gamma: gamma
  }

  return coeficients;
}
