var scanline = function(xmin, xmax, ymin, ymax, tri, objectIndex, alt) {
  for(y = ymin; y <= ymax; y++){
    for(x = xmin; x <= xmax; x++){

      if(x < 0 || y < 0 || x >= width || y >= height) continue;

      paint(x, y, 'black');
    }

    if(alt && (y == tri.point2.y || y == tri.point3.y)) {
      if(y == tri.point2.y) a12 = a23;
      else a13 = a23;

      alt = false;
    }

    if(a12 != Infinity && a12 != -Infinity && a12 != 0) {
      xmin += 1 / a12;
    }

    if(a13 != Infinity && a13 != -Infinity && a13 != 0) {
      xmax += 1 / a13;
    }
  }

  // console.log(xmin);
  // for(y = ymin; y <= ymax; y++){
  //   for(x = xmin; x <= xmax; x++) {
  //
  //     if(x < 0 || y < 0 || x >= width || y > height) continue;
  //
  //     var coeficients = tri.getBaricentricCoordinates(x, y);
  //     var p1 = points[objectIndex][tri.point1.index];
  //     var p2 = points[objectIndex][tri.point2.index];
  //     var p3 = points[objectIndex][tri.point3.index];
  //
  //     var px = coeficients.alpha * p1.x + coeficients.beta * p2.x + coeficients.gama * p3.x;
  //     var py = coeficients.alpha * p1.y + coeficients.beta * p2.y + coeficients.gama * p3.y;
  //     var pz = coeficients.alpha * p1.z + coeficients.beta * p2.z + coeficients.gama * p3.z;
  //
  //     var p = new Point3D(px, py, pz);
  //
  //     x = Math.floor(x);
  //     y = Math.floor(y);
  //     if(p.z < zbuffer[x][y]) {
  //       zbuffer[x][y] = p.z;
  //
  //       var nx = coeficients.alpha * p1.normal.x + coeficients.beta * p2.normal.x + coeficients.gama * p3.normal.x;
  //       var ny = coeficients.alpha * p1.normal.y + coeficients.beta * p2.normal.y + coeficients.gama * p3.normal.y;
  //       var nz = coeficients.alpha * p1.normal.z + coeficients.beta * p2.normal.z + coeficients.gama * p3.normal.z;
  //
  //       var n = new Vector(nx, ny, nz);
  //
  //       var v = p.transformVector().scalarProduct(-1);
  //
  //       var l = illumination.pl.subtraction(p).transformVector();
  //
  //       n.normalize();
  //       v.normalize();
  //       l.normalize();
  //
  //       if(v.innerProduct(n) < 0) n = n.scalarProduct(-1);
  //
  //       var color = illumination.phong(n, v, l, p);
  //
  //       color = 'black';
  //       paint(x, y, color);
  //
  //     }
  //
  //   }
  //
  //   if (alt && y == tri.point2.y) {
  //     a1 = a3;
  //     alt = false;
  //   }
  //
  //   if(a1 > 0) {
  //     xmin += 1 / a1;
  //     xmax += 1 / a2;
  //   }
  //   else {
  //     xmin += 1 / a2;
  //     xmax += 1 / a1;
  //   }
  // }
}
