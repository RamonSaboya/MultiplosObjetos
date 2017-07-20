var illumination = null;

function Illumination(pl, ka, ia, kd, id, ks, is, n){
    this.pl = pl;
    this.ka = ka;
    this.ia = ia;
    this.kd = kd;
    this.id = id;
    this.ks = ks;
    this.is = is;
    this.n = n;
}

function startIllumination(){
  /* Minonfy! */
  var audio = new Audio('assets/illumination.mp3');
  audio.play();

  var string = '';

  reader.readAsBinaryString(illuminationFile);
  reader.onloadend = function(event){
    string = reader.result;
    string = string.split('\n');

    illumination = null;

    var getPl = string[0].split(' ');
    var ka = string[1];
    var getIa = string[2].split(' ');
    var kd = string[3];
    var getId = string[4].split(' ');
    var ks = string[5];
    var getIs = string[6].split(' ');
    var n = string[7];

    var pl = new Point3D(getPl[0], getPl[1], getPl[2]);
    var ia = new Vector(getIa[0], getIa[1], getIa[2]);
    var id = new Vector(getId[0], getId[1], getId[2]);
    var is = new Vector(getIs[0], getIs[1], getIs[2]);

    illumination = new Illumination(pl, ka, ia, kd, id, ks, is, n);
    illumination.pl = pl.changeBase();
    start();
  }

}

Illumination.prototype.phong = function(n, v, l, p) {
  var diffuse = new Vector(0, 0, 0);
  var specular = new Vector(0, 0, 0);

  var ambient = this.ia.scalarProduct(this.ka);

  var nl = n.innerProduct(l);

  if(nl > 0) {
    var dx = this.kd * this.id.x * this.is.x * nl;
    var dy = this.kd * this.id.y * this.is.y * nl;
    var dz = this.kd * this.id.z * this.is.z * nl;
    diffuse = new Vector(dx, dy, dz);

    var r = (n.scalarProduct(2 * nl)).subtraction(l);

    if (r.innerProduct(v) > 0){
      specular = this.is.scalarProduct(this.ks * Math.pow(r.innerProduct(v), this.n));
    }
  }

  var result = (diffuse.sum(ambient).sum(specular));

  var red = Math.floor(Math.min(result.x, 255));
  var green = Math.floor(Math.min(result.y, 255));
  var blue = Math.floor(Math.min(result.z, 255));

  var color = {
    red: red,
    green: green,
    blue: blue
  }

  return color;
}
