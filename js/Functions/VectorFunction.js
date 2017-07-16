function Vector (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.norm = function(){
  return Math.sqrt(this.innerProduct(this));
}

Vector.prototype.normalize = function(vector) {
  var norm = this.norm();
  
  if (norm == 0) {
    return;
  }
   
  this.x /= norm;
  this.y /= norm;
  this.z /= norm;
};

Vector.prototype.innerProduct = function(vector){
  return (this.x * vector.x + this.y * vector.y + this.z * vector.z);
};

Vector.prototype.gramSchmidt = function(vector){
  return this.subtraction(vector.orthogonalProjection(this));
};

Vector.prototype.orthogonalProjection = function(vector){
  var result = this.innerProduct(vector) / this.innerProduct(this);
  
  var vec = this;
  
  return vec.scalarProduct(result);
};

Vector.prototype.scalarProduct = function(value){
  var x = this.x * value;
  var y = this.y * value;
  var z = this.z * value;
    
  return new Vector(x, y, z);
};

Vector.prototype.subtraction = function(vector){
  var x = this.x - vector.x;
  var y = this.y - vector.y;
  var z = this.z - vector.z;
  
  return new Vector(x, y, z);
};

Vector.prototype.vectorProduct = function(vector){
  var x = (this.y * vector.z) - (this.z * vector.y);
  var y = (this.z * vector.x) - (this.x * vector.z);
  var z = (this.x * vector.y) - (this.y * vector.x);

  return new Vector(x, y, z);
}
