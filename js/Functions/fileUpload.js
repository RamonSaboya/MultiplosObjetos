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

var files;
var filesArray = [];
var painte = [];

/*
 * This function gets the files and puts them on they're respective places
 * Also, it checks if every file has been sent before starting automatically
*/
var addFile = function(param) {

  /* Gets the files from the HTML*/
  files = document.getElementById(param).files;

  /* For each kind of file, put it on their respective variables */
  for(i = 0; i < files.length; i++) {
     filesArray[i] = files[i];
    if(param == 'objs') {
      if(files[i].name.includes('.byu')){

        if(!files[i].hasRendered) files[i].hasRendered = false;
        files[i].index = i;
        objectsFiles.push(files[i]);

        /* Creates a division between file names (multiple objects) */
        if (objectsFiles.length == 1) txtObj = "";

        txtObj += "<p class='badge'>" + files[i].name + '<button id="close" onclick="removeObj('+i+')"><i class="fa fa-close"></i></button></p>';
      } else alert("Por favor, escolha um arquivo de objeto de extensão .byu.")
      document.getElementById("objects").innerHTML = txtObj;
    }
    else if (param == 'cam') {
      if(files[i].name.includes('.cfg')){
        if(!cameraFile) {
          cameraFile = files[i];
          txtCam = "<p class='badge'>" + files[i].name ;
          txtCam += '<button id="close" onclick="removeCam()"><i class="fa fa-close"></i></button>';
        } else {
          cameraFile = files[i];
          objectsFiles.forEach(function(obj){
            obj.hasRendered = false;
          });
        }

      } else alert("Por favor, escolha um arquivo com extensão .cfg.");
      document.getElementById("camera").innerHTML = txtCam;
    }
    else {
      if(files[i].name.includes('.txt')){
        if(!illuminationFile){
          /* Minonfy! */
          var audio = new Audio('assets/illumination.mp3');
          audio.play();

          illuminationFile = files[i];
          txtIlu = "<p class='badge'>" + files[i].name;
          txtIlu += '<button id="close" onclick="removeIlu()"><i class="fa fa-close"></i></button>';
        } else {
          illuminationFile = files[i];
          objectsFiles.forEach(function(obj){
            obj.hasRendered = false;
          });
          console.log(files[i]);
        }
      } else alert("Por favor, escolha um arquivo com extensão .txt");
      document.getElementById("ilumination").innerHTML = txtIlu;
    }
  };

  document.getElementById(param).value = '';

  /* If every file has been sent, start calculations for each object file */

  if(objectsFiles.length > 0 && cameraFile && illuminationFile) {
    curObj = 0;
    html = 'Processando... <i class="fa fa-circle-o-notch fa-spin"></i>';
    document.getElementById('loading').innerHTML = html;
    console.time('Total');
    painte = [];
    startCamera();
  }
}

var removeObj = function(i) {
  var index = objectsFiles.indexOf(files[i]);
  if (index > -1) objectsFiles.splice(index, 1);
  if(objectsFiles.length == 0) txtObj = 'Adicione múltiplos arquivos';
  else {
    txtObj = '';
    objectsFiles.forEach(function(obj){
      txtObj += "<p class='badge'>" + obj.name + '<button id="close" onclick="removeObj('+filesArray.indexOf(obj)+')"><i class="fa fa-close"></i></button></p>';
    });
  }
  document.getElementById("objects").innerHTML = txtObj;
}

var removeCam = function(i) {
  cameraFile = false;
  objectsFiles.forEach(function(obj){
    obj.hasRendered = false;
  });
  document.getElementById("camera").innerHTML = 'Adicione um arquivo';
}

var removeIlu = function() {
  illuminationFile = false;
  objectsFiles.forEach(function(obj){
    obj.hasRendered = false;
  });
  document.getElementById("ilumination").innerHTML = 'Adicione um arquivo';
}
