var objects = [];
var ilumination = [];
var camera = [];
var txtObj = '';
var txtCam = '';
var txtIlu = '';

var reader = new FileReader();

var addObjects = function() {
  var filesDOM = document.getElementById("objs");
  var files = filesDOM.files;
  var id = filesDOM.id;

  for(i = 0; i < files.length; i++) {
    reader.readAsBinaryString(files[i]);
    if(id == "objs"){
      objects.push(reader.result);
      if (objects.length > 1){
        txtObj += " | "
      }
      txtObj += files[i].name;
      document.getElementById("objects").innerHTML = "<p id='objects'>" + txtObj + "</p>";
    } else if (id == "ilum") {
      
    } else {

    }

  }

}
