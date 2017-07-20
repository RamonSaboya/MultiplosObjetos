/*
 * points2D stores the 3D point on 2D coordinates
 * triangles2D stores the triangles, but with each 2D respective point
 * a12, a13 and a23 are angular coeficients of a triangle
*/
var points2D = [];
var triangles2D = [];
var a12, a13, a23;

var start = function() {

  console.timeEnd("Lendo objeto " + fileName);
  console.time("Realizando cálculos do objeto " + fileName);

  var i = curObj;
  /* Changing the base of the point based on the camera */
  points[i].forEach(function(point, j){
      points[i][j] = point.changeBase(points[i][j].triangles, j);
  });

  triangles[i].forEach(function(triangle, j){
    /* Changing triangle points to match new points values */
    triangles[i][j].point1 = points[i][triangle.point1];
    triangles[i][j].point2 = points[i][triangle.point2];
    triangles[i][j].point3 = points[i][triangle.point3];

    /* Setting triangle normal vectors */
    triangles[i][j].setNormal();
  });


  /* Initialize multidimensional Points2D array */
  points2D[i] = [];

  points[i].forEach(function(point, j){
    /* Calculating each point normal vector with the sum of the triangles normal vectors */
    point.triangles.forEach(function(triangle){
      points[i][j].normal = points[i][j].normal.sum(triangle.normal);
    });

    /* Normalize each normal */
    points[i][j].normal.normalize();

    /* Transform each 3D point into a 2D one */
    points2D[i].push(points[i][j].transform2D(j));
  });

  triangles2D[i] = [];
  triangles[i].forEach(function(triangle, j){

    /* Store 2D Triangles (same as 3D, but with 2D points) */
    var p1 = points2D[i][triangle.point1.index];
    var p2 = points2D[i][triangle.point2.index];
    var p3 = points2D[i][triangle.point3.index];
    var tri = new Triangle(p1, p2, p3);
    triangles2D[i].push(tri);

    /* Organize the triangle vertices by y (if y are equal, compare x) */
    triangles2D[i][j].orderVertices();

    /* Creates auxiliar variables */
    tri = triangles2D[i][j];
    p1 = tri.point1;
    p2 = tri.point2;
    p3 = tri.point3;

    var orient = Math.floor((p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x));

    var aux;
    if(orient < 0){
        /* The triangle is okay to be set */
    } else if (orient > 0) {
      aux = p2;
      p2 = p3;
      p3 = aux;
    } else if (p2.x < p1.x && p3.x < p1.x) {
      /* The triangle is okay to be set */
    } else if (p2.x > p1.x && p3.x > p1.x) {
      aux = p2;
      p2 = p3;
      p3 = aux;
    } else if (p2.x < p3.x) {
    } else {
      aux = p2;
      p2 = p3;
      p3 = aux;
    }

    tri.p1 = p1;
    tri.p2 = p2;
    tri.p3 = p3;

    if(!tri.isTriangle()) return;

    var ymin = p1.y;
    var ymax = Math.max(p2.y, p3.y);
    var xmin = p1.x;
    var xmax = p1.x;

    a12 = (p2.y - p1.y) / (p2.x - p1.x);
    a13 = (p3.y - p1.y) / (p3.x - p1.x);
    a23 = (p3.y - p2.y) / (p3.x - p2.x);

    var alt = true;

    if(Math.abs(p1.y - p2.y) == 0) {
      xmin = Math.min(p1.x, p2.x);
      xmax = Math.max(p1.x, p2.x);

      a12 = a23;
      alt = false;
    } else if (Math.abs(p1.y - p3.y) == 0) {
      xmin = Math.min(p1.x, p3.x);
      xmax = Math.max(p1.x, p3.x);

      a13 = a23;
      alt = false;
    }

    scanline(Math.floor(xmin), Math.floor(xmax), ymin, ymax, p1, p2, p3, i, alt);

  });

  console.timeEnd("Realizando cálculos do objeto " + fileName);
  objectsFiles[curObj].hasRendered = true;
  if(curObj < objectsFiles.length - 1) {
    curObj++;
    startObject(objectsFiles[curObj]);
  } else {
    paintAll();
    html = 'Pronto! Esperando próxima entrada <i class="fa fa-check"></i>';
    document.getElementById('loading').innerHTML = html;
    console.timeEnd('Total');
    document.getElementById("ilumination").innerHTML = txtIlu.replace('<button id="close" onclick="removeIlu()"><i class="fa fa-close"></i></button>', '');
    document.getElementById("camera").innerHTML = txtCam.replace('<button id="close" onclick="removeCam()"><i class="fa fa-close"></i></button>', '');
    if(document.getElementById('labelCam') && document.getElementById('labelIlu')){
      document.getElementById('labelCam').outerHTML = '<label class="custom-file-upload" id="labelCamDis">+</label>'
      document.getElementById('labelIlu').outerHTML = '<label class="custom-file-upload" id="labelIluDis">+</label>'
    }

    txtObj = '';
    objectsFiles.forEach(function(obj){
      txtObj += "<p class='badge'>" + obj.name + '</p>';
    });
    document.getElementById("objects").innerHTML = txtObj;
  }
}
