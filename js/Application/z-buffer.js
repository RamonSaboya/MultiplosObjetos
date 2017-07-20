var zbuffer = [];

var initializeZBuffer = function(){
  zbuffer = [];
  for(i = 0; i < width; i++) {
    zbuffer[i] = [];
    for(j = 0; j < height; j++) {
      zbuffer[i][j] = Infinity;
    }
  }
}

initializeZBuffer();
