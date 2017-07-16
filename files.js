var objects = [];
var ilumination;
var camera;
var txtObj = '';
var txtCam = '';
var txtIlu = '';

var reader = new FileReader();

var addFile = function(param) {
  var files = document.getElementById(param).files;

  for(i = 0; i < files.length; i++) {
    reader.readAsBinaryString(files[i]);
    if(param == "objs"){
      objects.push(reader.result);
      if (objects.length > 1) txtObj += " | "
      txtObj += files[i].name;
      document.getElementById("objects").innerHTML = "<p id='objects'>" + txtObj + "</p>";
    } else if (param == "cam") {
      txtCam = files[i].name;
      camera = reader.result;
      document.getElementById("camera").innerHTML = "<p id='objects'>" + txtCam + "</p>";
    } else {
      txtIlu = files[i].name;
      ilumination = reader.result;
      document.getElementById("ilumination").innerHTML = "<p id='objects'>" + txtIlu + "</p>";
    }

  }

}
