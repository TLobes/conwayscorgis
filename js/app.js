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
          html += '<img src="http://placecorgi.com/64" />'; // alive
        }
        else {
          html += '<img src="http://www.fillmurray.com/64/64" />'; // dead 
        }
      }
    }
}


// Show how many alive 
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

var calculate = function (numOfNeighbors, state) {
  /*
    - Any live cell with fewer than two live neighbours dies,
     as if caused by under-population.
    - Any live cell with two or three live neighbours lives
     on to the next generation.
    - Any live cell with more than three live neighbours dies,
     as if by over-population.
    - Any dead cell with exactly three live neighbours
     becomes a live cell, as if by reproduction.
  */
  if (state) {
    if (numOfNeighbors < 2) {
      return false;
    }
    else if (numOfNeighbors == 2 || numOfNeighbors == 3) {
      return true;
    }
    else if (numOfNeighbors > 3) {
      return false;
    }
  }
  else {
    if (numOfNeighbors === 3) {
      return true;
    }
  }
};

var drawSecond = function (array) {
  
    for (var i = 0; i < Y_SIZE; i++) {
      for (var j = 0; j < X_SIZE; j++) {
        var numOfNeighbors = look(i,j);
        //debugger;
        var state = calculate( numOfNeighbors, array[i][j] );


        if (state)
        {
          html += '<img src="http://placecorgi.com/64" />'; // alive
        }
        else {
          html += '<img src="http://www.fillmurray.com/64/64" />'; // dead 
        }
      }
    }
}


document.addEventListener("DOMContentLoaded", function(event) { 
  
  draw(derp);
  html += '<br><br>';
  drawSecond(derp);

  document.getElementById("game").innerHTML = html;
});


//console.log( look(1,1) );

