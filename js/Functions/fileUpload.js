/* These variables are strings of the files */
var objectsFiles = [];
var illuminationFile;
var cameraFile;

/* These variables are the string on the HTML file */
var txtObj = 'Adicione múltiplos arquivos';
var txtCam = 'Adicione um arquivo';
var txtIlu = 'Adicione um arquivo';

/* Setting a variable for the FileReader API */
var reader = new FileReader();

/*
 * This function gets the files and puts them on they're respective places
 * Also, it checks if every file has been sent before starting automatically
*/
var addFile = function(param) {

  /* Gets the files from the HTML*/
  var files = document.getElementById(param).files;

  /* For each kind of file, put it on their respective variables */
  for(i = 0; i < files.length; i++) {
    if(param == 'objs') {
      if(files[i].name.includes('.byu')){

        if(!files[i].hasRendered) files[i].hasRendered = false;
        objectsFiles.push(files[i]);

        /* Creates a division between file names (multiple objects) */
        if (objectsFiles.length > 1) txtObj += " | "
        else txtObj = "<p class='badge'>";

        txtObj += files[i].name + '<button id="close" ng-click="removeRec(rec)"><i class="fa fa-close"></i></button>';
      } else alert("Por favor, escolha um arquivo de objeto de extensão .byu.")
      document.getElementById("objects").innerHTML = txtObj;
    }
    else if (param == 'cam') {
      if(files[i].name.includes('.cfg')){
        cameraFile = files[i];
        txtCam = "<p class='badge'>" + files[i].name ;
        txtCam += '<button id="close" ng-click="removeRec(rec)"><i class="fa fa-close"></i></button>';
      } else alert("Por favor, escolha um arquivo com extensão .cfg.");
      document.getElementById("camera").innerHTML = txtCam;
    }
    else {
      if(files[i].name.includes('.txt')){
        /* Minonfy! */
        var audio = new Audio('assets/illumination.mp3');
        audio.play();
        
        illuminationFile = files[i];
        txtIlu = "<p class='badge'>" + files[i].name;
        txtIlu += '<button id="close" ng-click="removeRec(rec)"><i class="fa fa-close"></i></button>';
      } else alert("Por favor, escolha um arquivo com extensão .txt");
      document.getElementById("ilumination").innerHTML = txtIlu;
    }
  };

  /* If every file has been sent, start calculations for each object file */
  if(objectsFiles.length > 0 && cameraFile && illuminationFile) {
    curObj = 0;
    html = 'Processando...<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>';
    document.getElementById('loading').innerHTML = html;
    console.time('Total');
    startCamera();
  }
}
