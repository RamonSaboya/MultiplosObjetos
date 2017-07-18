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
