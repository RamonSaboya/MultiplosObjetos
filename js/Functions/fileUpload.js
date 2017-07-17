/* These variables are strings of the files */
var objectsFiles = [];
var illuminationFile;
var cameraFile;

/* These variables are the string on the HTML file */
var txtObj = '';
var txtCam = '';
var txtIlu = '';

var ableToStart = true;

// if(ableToStart) {
//   document.getElementById('startButton').innerHTML = '<button class="btn-primary" onclick="start()"> Vai na fé! </button>'
// } else {
//   document.getElementsByClassName('startButton').innerHTML = '<button class="btn-primary" onclick="start()" disabled> Vai na fé! </button>'
// }

var orderOfObjects = 0;

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
        startObject(reader.result, orderOfObjects);
        orderOfObjects++;
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
        startIllumination();
      }
      document.getElementById("ilumination").innerHTML = txtIlu;
    }
  }
}
