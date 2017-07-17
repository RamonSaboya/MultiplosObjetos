var start = function(){

  /* Changing the base of the point based on the camera */
  points.forEach(function(obj, i){
    obj.forEach(function(point, j){
      points[i][j] = point.changeBase(points[i][j].triangles);
    });
  });

  triangles.forEach(function(obj, i){
    obj.forEach(function(triangle, j){
      /* Changing triangle points to match new points values */
      triangles[i][j].point1 = points[i][triangle.point1];
      triangles[i][j].point2 = points[i][triangle.point2];
      triangles[i][j].point3 = points[i][triangle.point3];

      /* Setting triangle normal vectors */
      triangles[i][j].setNormal();
    });
  });

  points.forEach(function(obj, i){
    obj.forEach(function(point, j){
      point.triangles.forEach(function(triangle){
        points[i][j].normal = points[i][j].normal.sum(triangle.normal);
      });
    });
  });
}
