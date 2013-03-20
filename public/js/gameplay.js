



function render(game){
  $('#game').text(game.player1.position+' / '+game.player2.position);
}

var myGame = new Game();

console.log( myGame.player1 );
console.log( myGame.player2 );

render(game)

console.log( myGame.isOver() );

myGame.player1.advance();

render(game)

console.log( myGame.player1.position );
console.log( myGame.player2.position );

myGame.player2.advance();
myGame.player2.advance();
myGame.player2.advance();

console.log( myGame.isOver() );

console.log( myGame.player1.position );
console.log( myGame.player2.position );

myGame.player1.advance();
myGame.player1.advance();
myGame.player1.advance();

console.log( myGame.isOver() );

myGame.player1.advance();
myGame.player1.advance();
myGame.player1.advance();
myGame.player1.advance();
myGame.player1.advance();
myGame.player1.advance();


console.log( myGame.isOver() ); // true

console.log( myGame.winner() ); //

$(document).on('keyup', function(e) {
  if (e.which == 81) { // player 1
    myGame.player1.advance();
  }

  if (e.which == 43) { // player 2
    myGame.player2.advance();
  }

  render(game);
 
});  
