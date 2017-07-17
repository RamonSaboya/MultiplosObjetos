/* These variables are strings of the files */
var objectsFiles = [];
var illuminationFile;
var cameraFile;

/* These variables are the string on the HTML file */
var txtObj = '';
var txtCam = '';
var txtIlu = '';

var reader = new FileReader();

var addFile = function(param) {
  var files = document.getElementById(param).files;

  for(i = 0; i < files.length; i++) {

    reader.readAsBinaryString(files[i]);

    if(param == "objs"){
      if (objectsFiles.length >= 1) txtObj += " | "
      txtObj += files[i].name;
      reader.onloadend = function(event){
        objectsFiles.push(reader.result);
      }
      document.getElementById("objects").innerHTML = txtObj;
    } else if (param == "cam") {
      txtCam = files[i].name;
      reader.onloadend = function(event){
        cameraFile = reader.result;
        startCamera();
      }
      document.getElementById("camera").innerHTML = txtCam;
    } else {
      txtIlu = files[i].name;
      reader.onloadend = function(event){
        illuminationFile = reader.result;
      }
      document.getElementById("ilumination").innerHTML = txtIlu;
    }
  }
}
