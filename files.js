var files;
var reader = new FileReader();

var addFile = function() {
  var x = document.getElementById("myFile");
  var file;
  x.files.forEach(function(file){
    files.push(file);
  });
  reader.readAsBinaryString(file);
}
