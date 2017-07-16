var camera = null;

function startCamera(data){
    if (!data){
        return;
    }
    
    camera = null;
    
    var getC = data[0].split(' ');
    var getN = data[1].split(' ');
    var getV = data[2].split(' ');
    var getTela = data[3].split(' ');
    
    var c = new Point3D(getC[0], getC[1], getC[2]);
    var n = new Vector(getN[0], getN[1], getN[2]);
    var v = new Vector(getV[0], getV[1], getV[2]);
    var d = getTela[0];
    var hx = getTela[1];
    var hy = getTela[2];
    
    camera = new Camera(c, n, v, d, hx, hy);
    
    camera.generateAlpha();
}

function Camera(c, n, v, d, hx, hy) {
  this.c = c;
  this.n = n;
  this.v = v;
  this.d = d;
  this.hx = hx;
  this.hy = hy;
  this.alpha = [];
}

Camera.generateAlpha() = function(){
    
}