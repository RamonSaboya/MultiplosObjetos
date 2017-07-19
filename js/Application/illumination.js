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
    if (!illuminationFile){
        return;
    }

    illuminationFile = illuminationFile.split('\n');

    illumination = null;

    var getPl = illuminationFile[0].split(' ');
    var ka = illuminationFile[1];
    var getIa = illuminationFile[2].split(' ');
    var kd = illuminationFile[3];
    var getId = illuminationFile[4].split(' ');
    var ks = illuminationFile[5];
    var getIs = illuminationFile[6].split(' ');
    var n = illuminationFile[7];

    var pl = new Point3D(getPl[0], getPl[1], getPl[2]);
    var ia = new Vector(getIa[0], getIa[1], getIa[2]);
    var id = new Vector(getId[0], getId[1], getId[2]);
    var is = new Vector(getIs[0], getIs[1], getIs[2]);

    illumination = new Illumination(pl, ka, ia, kd, id, ks, is, n);
    illumination.pl = pl.changeBase();
}
//
// iluminacao.txt
// /---------------------------------------\
// | -200 -50 300                          | ; Pl - Posicao da luz em coordenadas de mundo
// | 1                                     | ; ka - reflexao ambiental
// | 2 2 2                                 | ; Ia - vetor cor ambiental
// | 1                                     | ; kd - constante difusa
// | 1 1 1                                 | ; Od - vetor difuso
// | 0.5                                   | ; ks - parte especular
// | 0 255 0                               | ; Il - cor da fonte de luz
// | 2                                     | ; n  - constante de rugosidade
// |                                       |
// \---------------------------------------/

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

    var r = n.scalarProduct(2 * nl).subtraction(l);

    if (r.innerProduct(v) == 0){
      specular = this.is.scalarProduct(this.ks * Math.pow(r, this.n));
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
