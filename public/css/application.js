$(document).ready(function() {
  $(document).on('keyup', function(e) {

    moveForward(e);

    if (gameOver()) {
      restartGame();
    }

  });
});


var moveForward = function(e) {
  if (e.which == 81) {
    $('#player1_strip .active').next().addClass("active");
    $('#player1_strip .active').first().removeClass("active");
  }

  if (e.which == 80) {
    $('#player2_strip .active').next().addClass("active");
    $('#player2_strip .active').first().removeClass("active");
  }
}

var gameOver = function() {
  if ($('#player1_strip td:last-child').hasClass("active")) {
    alert('Game over - Player 1 wins!');
    return true;
  }

  if ($('#player2_strip td:last-child').hasClass("active")) {
    alert('Game over - Player 2 wins!');
    return true;  
  }
}

var restartGame = function() {
  $('#player1_strip .active').removeClass("active");
  $('#player1_strip td').first().addClass("active");
  $('#player2_strip .active').removeClass("active");
  $('#player2_strip td').first().addClass("active");
}
