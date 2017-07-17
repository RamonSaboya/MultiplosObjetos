function Vector (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

// Função que retorna a norma do vetor
Vector.prototype.norm = function(){
  return Math.sqrt(this.innerProduct(this));
}

// Função de normalização do vetor
Vector.prototype.normalize = function(vector) {
  var norm = this.norm();
  
  if (norm == 0) {
    return;
  }
   
  this.x /= norm;
  this.y /= norm;
  this.z /= norm;
}

// Função do produto interno entre dois vetores
Vector.prototype.innerProduct = function(vector){
  return (this.x * vector.x + this.y * vector.y + this.z * vector.z);
}

// Processo de Gram Schmidt 
Vector.prototype.gramSchmidt = function(vector){
  return this.subtraction(vector.orthogonalProjection(this));
}

// Projeção ortogonal de vetores
Vector.prototype.orthogonalProjection = function(vector){
  var result = this.innerProduct(vector) / this.innerProduct(this);
  
  var vec = this;
  
  return vec.scalarProduct(result);
}

// Função do produto escalar
Vector.prototype.scalarProduct = function(value){
  var x = this.x * value;
  var y = this.y * value;
  var z = this.z * value;
    
  return new Vector(x, y, z);
}

// Função de subtração de dois vetores
Vector.prototype.subtraction = function(vector){
  var x = this.x - vector.x;
  var y = this.y - vector.y;
  var z = this.z - vector.z;
  
  return new Vector(x, y, z);
}

// Função de Produto vetorial entre dois vetores
Vector.prototype.vectorProduct = function(vector){
  var x = (this.y * vector.z) - (this.z * vector.y);
  var y = (this.z * vector.x) - (this.x * vector.z);
  var z = (this.x * vector.y) - (this.y * vector.x);

  return new Vector(x, y, z);
}
