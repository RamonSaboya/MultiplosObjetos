var scanline = function(xmin, xmax, ymin, ymax, p1, p2, p3, objectIndex, alt) {
  for(y = ymin; y <= ymax; y++){
    for(x = xmin; x <= xmax; x++){

      if(x < 0 || y < 0 || x >= width || y >= height) continue;

      var tri = new Triangle(p1, p2, p3);
      var coeficients = tri.getBaricentricCoordinates(x, y, p1, p2, p3);

      var point1 = points[objectIndex][p1.index];
      var point2 = points[objectIndex][p2.index];
      var point3 = points[objectIndex][p3.index];

      var px = coeficients.alpha * point1.x + coeficients.beta * point2.x + coeficients.gamma * point3.x;
      var py = coeficients.alpha * point1.y + coeficients.beta * point2.y + coeficients.gamma * point3.y;
      var pz = coeficients.alpha * point1.z + coeficients.beta * point2.z + coeficients.gamma * point3.z;

      var p = new Point3D(px, py, pz);

      x = Math.floor(x);
      y = Math.floor(y);
      if(p.z < zbuffer[x][y]) {
        zbuffer[x][y] = p.z;

        var nx = coeficients.alpha * point1.normal.x + coeficients.beta * point2.normal.x + coeficients.gamma * point3.normal.x;
        var ny = coeficients.alpha * point1.normal.y + coeficients.beta * point2.normal.y + coeficients.gamma * point3.normal.y;
        var nz = coeficients.alpha * point1.normal.z + coeficients.beta * point2.normal.z + coeficients.gamma * point3.normal.z;

        var n = new Vector(nx, ny, nz);

        var v = p.transformVector().scalarProduct(-1);

        var l = illumination.pl.subtraction(p).transformVector();

        n.normalize();
        v.normalize();
        l.normalize();

        if(v.innerProduct(n) < 0) n = n.scalarProduct(-1);

        var color = illumination.phong(n, v, l, p);
        paint(x, y, color);

      }

    }

    if(alt && (y == p2.y || y == p3.y)) {
      if(y == p2.y) a12 = a23;
      else a13 = a23;

      alt = false;
    }

    if(a12 != Infinity && a12 != -Infinity && a12 != 0 && !isNaN(a12)) {
      xmin += 1 / a12;
    }

    if(a13 != Infinity && a13 != -Infinity && a13 != 0 && !isNaN(a13)) {
      xmax += 1 / a13;
    }
  }
}
