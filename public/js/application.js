
function Game() {
  this.maxPosition = 10;
  this.playerPositions = [0, 0];
  this.startTime = $.now();
  this.endTime = null;

  this.render();
}

$(function(){

  myGame = new Game();

  $('#play_button').click(function () {
    myGame.start();
    return false;
  });
})

Game.prototype.start = function() {
  var startTime = $.now();
}

Game.prototype.advance = function(player) {
  this.playerPositions[player]++;
  this.render();
  if (this.isWon()) {
    this.end();
  } 
}

Game.prototype.isWon = function() {
  return (this.playerPositions[0] === myGame.maxPosition - 1 ||
    this.playerPositions[1] === myGame.maxPosition - 1);
}

Game.prototype.render = function() {
  for (player = 0; player < this.playerPositions.length; player++) {
    var player_strip = $('#player' + (player + 1) + '_strip');
    console.log(player_strip)
    player_strip.html('');
    
    for (var i = 0; i < this.maxPosition ; i++) {
      var td = $('<td></td>');
      player_strip.append(td);

      if(this.playerPositions[player] === i) {
        td.addClass("active");
      }
    }
  }
}


$(document).on('keyup', function(e) {
  if (e.which == 81) {
    myGame.advance(0);
  }

  if (e.which == 80) {
    myGame.advance(1);
  }
})


Game.prototype.whoWon = function() {
  $(this.playerPositions).each(function(index, playerPosition) {
    if (playerPosition === myGame.maxPosition) {
      return index;
    }
  });
}

Game.prototype.end = function() {
  var length = $.now() - this.startTime;
  var whoWon = this.whoWon();
  var playerNames = figureOutPlayerNames();

  // $.post('/record', {length: length ... })
}

  // render(myGame)

  // // myGame.player1.advance();
  // // myGame.player2.advance();

  // render(myGame)

  // console.log( myGame.player1 );
  // console.log( myGame.player2 );

  // console.log( myGame.player1.position+' / '+myGame.player2.position );

  // myGame.player1.advance();
  // myGame.player1.advance();



  // render(myGame)


  // console.log( myGame.player1.position+' / '+myGame.player2.position );











// $(document).ready(function() {



//   $("#main-form").submit(function(e) {
//     e.preventDefault();
//     var $start_time = $.now();
//     var data = $(this).serialize();
//     $.ajax({
//       type: 'post',
//       url: '/',
//       data: data,
//       dataType: 'json'
//     })
//     .done(function (data) {
//       $("#container").removeClass("opaque");
//       var randKey = Math.floor((Math.random()*25)+65);
//       gamePlay(randKey);
//       var $player_1 = data.game.player1_id;
//       var $player_2 = data.game.player2_id;
//     })
//     .fail(function (a, b, c) {
//       console.log(a, b, c);
//     });
//   });  
// });

// var gamePlay = function(randKey) {
//   $(document).on('keyup', function(e) {
//     // do nothing if the game is not started
    
//     moveForward(e, randKey);
//     if (gameOver()) {
//     }
//   });  
// }

// var moveForward = function(e, randKey) {
  

//   if (e.which == 81) {
//     $('#player1_strip .active').next().addClass("active");
//     $('#player1_strip .active').first().removeClass("active");
//   }

//   if (e.which == randKey) {
//     $('#player2_strip .active').next().addClass("active");
//     $('#player2_strip .active').first().removeClass("active");
//   }
// }

// var player1Wins = function() {
//   $.ajax({
//     type: 'post',
//     url: '/game_over',
//     data: { winning_id: "player1" },
//     dataType: 'json'
//   })
//   .done(function(data) {
//     window.location = data;
//   })
// }

// var player2Wins = function() {

//   $.ajax({
//     type: 'post',
//     url: '/game_over',
//     data: { winning_id: "player2" },
//     dataType: 'json'
//   })
//   .done(function(data) {
//     window.location = data;
//   })
// }

// var gameOver = function() {
//   if ($('#player1_strip td:last-child').hasClass("active")) {
//     player1Wins();
//     return true;
//   }

//   if ($('#player2_strip td:last-child').hasClass("active")) {
//     player2Wins();
//     return true;
//   }
// }

// var restartGame = function() {
//   $('#player1_strip .active').removeClass("active");
//   $('#player1_strip td').first().addClass("active");
//   $('#player2_strip .active').removeClass("active");
//   $('#player2_strip td').first().addClass("active");
// }
