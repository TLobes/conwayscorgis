var board = [];
var html = '';
var X_SIZE = 8;
var Y_SIZE = 8;

/**
 * @returns {Array} array -- The array of the board filled with X rows each of Y length, with 1 or 0 randomly assigned: 1 represents a living cell and 0 represents a dead cell
 */
for (var y = 0; y < Y_SIZE; y++) {
  var row = [];
  // Generate grid of random on and off
  for (var x = 0; x < X_SIZE; x++) {
    row[x] = Math.round(Math.random());
  }
  board.push(row);
}

/**
 * @param {Array} array -- The array of the board
 * @returns {html} -- Appends either a dead or living image corresponding to the array value
 */
var draw = function (array) {
  for (var y = 0; y < Y_SIZE; y++) {
    for (var x = 0; x < X_SIZE; x++) {
      if ( array[y][x] == 1)
      {
        html += '<img src="http://placecorgi.com/64" />'; // alive
      }
      else {
        html += '<img src="http://www.fillmurray.com/64/64" />'; // dead
      }
    }
  }
}

/**
 * @param {integer} x -- Integer from 0 through X_SIZE
 * @param {integer} y -- Integer from 0 through Y_SIZE
 * @returns {integer} -- The number of living neighbors in that (x,y) coordinate cell's immediate neighborhood
 */
var livingNeighbors = function(x, y) {
  var count = 0;
  if (x < X_SIZE && y < Y_SIZE) {
    // Corners
    if (x == 0) {
      if (y == 0) {
        // NW Corner
        if (board[x][y + 1] == 1) {count++;} // right
        if (board[x + 1][y + 1] == 1) {count++;} // se
        if (board[x + 1][y] == 1) {count++;} // down
      }
      else if (y == Y_SIZE - 1) {
        // NE Corner
        if (board[x][y - 1] == 1) {count++;} // left
        if (board[x + 1][y] == 1) {count++;} // down
        if (board[x + 1][y - 1] == 1) {count++;} // sw
      }
      else {
        // N edge
        if (board[x][y + 1] == 1) {count++;} // right
        if (board[x][y - 1] == 1) {count++;} // left
        if (board[x + 1][y] == 1) {count++;} // down
        if (board[x + 1][y - 1] == 1) {count++;} // sw
        if (board[x + 1][y + 1] == 1) {count++;} // se
      }
    } else if (x == X_SIZE - 1) {
      // last row
      if (y == 0) {
        // SW Corner
        if (board[x - 1][y] == 1) {count++;} // up
        if (board[x][y + 1] == 1) {count++;} // right
        if (board[x - 1][y + 1] == 1) {count++;} // ne
      }
      else if (y == Y_SIZE - 1) {
        // SE Corner
        if (board[x - 1][y] == 1) {count++;} // up
        if (board[x][y - 1] == 1) {count++;} // left
        if (board[x - 1][y - 1] == 1) {count++;} // nw
      }
      else {
        // S edge
        if (board[x][y + 1] == 1) {count++;} // right
        if (board[x][y - 1] == 1) {count++;} // left
        if (board[x - 1][y] == 1) {count++;} // up
        if (board[x - 1][y - 1] == 1) {count++;} // nw
        if (board[x - 1][y + 1] == 1) {count++;} // ne
      }
    } else {
      if (y == 0) {
        // W edge
        if (board[x][y + 1] == 1) {count++;} // right
        if (board[x - 1][y] == 1) {count++;} // up
        if (board[x + 1][y] == 1) {count++;} // down
        if (board[x - 1][y + 1] == 1) {count++;} // ne
        if (board[x + 1][y + 1] == 1) {count++;} // se
      } else if (y == Y_SIZE - 1) {
        // E edge
        if (board[x][y - 1] == 1) {count++;} // left
        if (board[x - 1][y] == 1) {count++;} // up
        if (board[x + 1][y] == 1) {count++;} // down
        if (board[x - 1][y - 1] == 1) {count++;} // nw
        if (board[x + 1][y - 1] == 1) {count++;} // sw
      }
      else {
        // left and right
        if (board[x][y + 1] == 1) {count++;} // right
        if (board[x][y - 1] == 1) {count++;} // left
        // up and down
        if (board[x - 1][y] == 1) {count++;} // up
        if (board[x + 1][y] == 1) {count++;} // down
        // corners
        if (board[x - 1][y - 1] == 1) {count++;} // nw
        if (board[x - 1][y + 1] == 1) {count++;} // ne
        if (board[x + 1][y - 1] == 1) {count++;} // sw
        if (board[x + 1][y + 1] == 1) {count++;} // se
      }
    }
  } else {console.log('no');}
  return count;
};

/**
 * @param {integer} numOfLivingNeighbors -- Integer from 0 through 8
 * @param {integer} state -- Integer of 0 or 1, 0 representing dead and 1 representing alive
 * @returns {boolean} -- Returns true if the cell will continue living, or false if it will die
 */
var deadOrAlive = function (numOfLivingNeighbors, state) {
  if (state) {
    if (numOfLivingNeighbors < 2) {
      return false;
    }
    else if (numOfLivingNeighbors == 2 || numOfLivingNeighbors == 3) {
      return true;
    }
    else if (numOfLivingNeighbors > 3) {
      return false;
    }
  }
  else {
    if (numOfLivingNeighbors === 3) {
      return true;
    }
  }
};

/**
 * @param {Array} array -- The array of the board
 * @returns {html} -- Appends either a dead or living image corresponding to the array value's next dead or alive state.
 */
var drawSecond = function (array) {
  for (var y = 0; y < Y_SIZE; y++) {
    for (var x = 0; x < X_SIZE; x++) {
      var state = deadOrAlive(livingNeighbors(y,x), array[y][x]);
      if (state) {
        html += '<img src="http://placecorgi.com/64" />'; // alive
      }
      else {
        html += '<img src="http://www.fillmurray.com/64/64" />'; // dead
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  draw(board);
  html += '<br><br>';
  drawSecond(board);
  document.getElementById("game").innerHTML = html;
});
