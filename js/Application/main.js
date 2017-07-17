var start = function(){

  /* Changing the base of the point based on the camera */
  points.forEach(function(object, i){
    object.forEach(function(point, j){
      points[i][j] = point.changeBase();
    });
  });

  triangles.forEach(function(obj, i){
    obj.forEach(function(triangle, j){
      /* Changing triangle points to match new points values */
      triangles[i][j].point1 = points[i][triangle.point1];
      triangles[i][j].point2 = points[i][triangle.point2];
      triangles[i][j].point3 = points[i][triangle.point3];

      /* Calculating triangle normal vectors */



    });
  });

  console.log(points);
}
