var camera = null;

function Camera(c, n, v, d, hx, hy) {
    this.c = c;
    this.n = n;
    this.v = v;
    this.d = d;
    this.hx = hx;
    this.hy = hy;
    this.alpha = [];
}

function startCamera(){
    if (!cameraFile){
        return;
    }
    /* Split the three parameters from the file string */
    cameraFile = cameraFile.split('\n');

    camera = null;
    var getC = cameraFile[0].split(' ');
    var getN = cameraFile[1].split(' ');
    var getV = cameraFile[2].split(' ');
    var getTela = cameraFile[3].split(' ');


    var c = new Point3D(getC[0], getC[1], getC[2]);
    var n = new Vector(getN[0], getN[1], getN[2]);
    var v = new Vector(getV[0], getV[1], getV[2]);

    var d = getTela[0];
    var hx = getTela[1];
    var hy = getTela[2];

    camera = new Camera(c, n, v, d, hx, hy);
    camera.generateAlpha();

}

Camera.prototype.generateAlpha = function(){
    this.n.normalize();
    this.v = this.v.gramSchmidt(this.n);
    this.v.normalize();

    var u = this.n.vectorProduct(this.v);

    this.alpha.push([u.x, u.y, u.z]);
    this.alpha.push([this.v.x, this.v.y, this.v.z]);
    this.alpha.push([this.n.x, this.n.y, this.n.z]);
}
