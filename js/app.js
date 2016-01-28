var derp = [];
var html = '';

var X_SIZE = 8;
var Y_SIZE = 8;

// Calculate First time
for (var i = 0; i < Y_SIZE; i++) {
  var row = [];

  // Generate grid of random on and off
  for (var j = 0; j < X_SIZE; j++) {  
    row[j] = Math.round(Math.random());
  }

  derp.push(row);
}


var draw = function (array) {
    for (var i = 0; i < Y_SIZE; i++) {
      for (var j = 0; j < X_SIZE; j++) {
        //console.log(i + ' ' + j);
        if ( array[i][j] == 1)
        {
          html += '<img src="http://placecorgi.com/64" />';
        }
        else {
          html += '<img src="http://www.fillmurray.com/64/64" />';
        }
      }
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  
  draw(derp);

  document.getElementById("game").innerHTML = html;
});


var look = function(x, y) {
  var count = 0;

  if (x < X_SIZE && y < Y_SIZE) {
    // Corners
    if (x == 0) {
      if (y == 0) {
        // NW Corner
        if (derp[x][y + 1] == 1) {count++;} // right

        if (derp[x + 1][y + 1] == 1) {count++;} // se

        if (derp[x + 1][y] == 1) {count++;} // down
      }
      else if (y == Y_SIZE - 1) {
        // NE Corner
        if (derp[x][y - 1] == 1) {count++;} // left
        if (derp[x + 1][y] == 1) {count++;} // down

        if (derp[x + 1][y - 1] == 1) {count++;} // sw
      }
      else {
        // N edge
        if (derp[x][y + 1] == 1) {count++;} // right
        if (derp[x][y - 1] == 1) {count++;} // left

        if (derp[x + 1][y] == 1) {count++;} // down

        if (derp[x + 1][y - 1] == 1) {count++;} // sw
        if (derp[x + 1][y + 1] == 1) {count++;} // se
      }
    } else if (x == X_SIZE - 1) {
      // last row
      if (y == 0) {
        // SW Corner
        if (derp[x - 1][y] == 1) {count++;} // up

        if (derp[x][y + 1] == 1) {count++;} // right

        if (derp[x - 1][y + 1] == 1) {count++;} // ne
      }
      else if (y == Y_SIZE - 1) {
        // SE Corner
        if (derp[x - 1][y] == 1) {count++;} // up

        if (derp[x][y - 1] == 1) {count++;} // left

        if (derp[x - 1][y - 1] == 1) {count++;} // nw
      }
      else {
        // S edge
        if (derp[x][y + 1] == 1) {count++;} // right
        if (derp[x][y - 1] == 1) {count++;} // left

        if (derp[x - 1][y] == 1) {count++;} // up

        if (derp[x - 1][y - 1] == 1) {count++;} // nw
        if (derp[x - 1][y + 1] == 1) {count++;} // ne
      }
    } else {
      if (y == 0) {
        // W edge
        if (derp[x][y + 1] == 1) {count++;} // right

        if (derp[x - 1][y] == 1) {count++;} // up
        if (derp[x + 1][y] == 1) {count++;} // down

        if (derp[x - 1][y + 1] == 1) {count++;} // ne
        if (derp[x + 1][y + 1] == 1) {count++;} // se
      } else if (y == Y_SIZE - 1) {
        // E edge
        if (derp[x][y - 1] == 1) {count++;} // left

        if (derp[x - 1][y] == 1) {count++;} // up
        if (derp[x + 1][y] == 1) {count++;} // down

        if (derp[x - 1][y - 1] == 1) {count++;} // nw
        if (derp[x + 1][y - 1] == 1) {count++;} // sw
      }
      else {
        // left and right
        if (derp[x][y + 1] == 1) {count++;} // right
        if (derp[x][y - 1] == 1) {count++;} // left

        // up and down
        if (derp[x - 1][y] == 1) {count++;} // up
        if (derp[x + 1][y] == 1) {count++;} // down

        // corners
        if (derp[x - 1][y - 1] == 1) {count++;} // nw
        if (derp[x - 1][y + 1] == 1) {count++;} // ne
        if (derp[x + 1][y - 1] == 1) {count++;} // sw
        if (derp[x + 1][y + 1] == 1) {count++;} // se
      }
    }
  } else {console.log('no');}

  return count;
};

console.log( look(8,7) );

