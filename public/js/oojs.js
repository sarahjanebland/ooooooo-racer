

function Player(){
  this.position = 0;
  this.advance = function() {
    this.position += 1;
  }
}


function Game(){
  this.player1 = new Player();
  this.player2 = new Player();
  this.startTime = $.now();
  // this.endTime = //?
  this.isWon = false;
  // this.winningPlayer = 
}

function render() {


}


myGame = new Game();

render(myGame)


console.log( myGame.player1 );
console.log( myGame.player2 );

console.log( myGame.player1.position+' / '+myGame.player2.position );

myGame.player1.advance();
myGame.player1.advance();
myGame.player1.advance();
myGame.player2.advance();

console.log( myGame.player1.position+' / '+myGame.player2.position );
