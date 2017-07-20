/* These variables are strings of the files */
var objectsFiles = [];
var illuminationFile;
var cameraFile;

/* These variables are the string on the HTML file */
var txtObj = '';
var txtCam = '';
var txtIlu = '';

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
        objectsFiles.push(files[i]);

        /* Creates a division between file names (multiple objects) */
        if (objectsFiles.length > 1) txtObj += " | "

        txtObj += files[i].name;
        document.getElementById("objects").innerHTML = txtObj;
      } else alert("Por favor, escolha um arquivo de objeto de extensão .byu.")

    }
    else if (param == 'cam') {
      if(files[i].name.includes('.cfg')){
        cameraFile = files[i];
        txtCam = files[i].name;
      } else alert("Por favor, escolha um arquivo com extensão .cfg.");
      document.getElementById("camera").innerHTML = txtCam;
    }
    else {
      if(files[i].name.includes('.txt')){
        illuminationFile = files[i];
        txtIlu = files[i].name;
      } else alert("Por favor, escolha um arquivo com extensão .txt");
      document.getElementById("ilumination").innerHTML = txtIlu;
    }
  };

  /* If every file has been sent, start calculations for each object file */
  if(objectsFiles.length > 0 && cameraFile && illuminationFile) {
    curObj = 0;
    startObject(objectsFiles[curObj], curObj);
  }
}
