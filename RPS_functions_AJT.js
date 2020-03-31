// RPS Revisited

// 1. Define a hands array with the values 'rock', 'paper', and 'scissors';
var hands = ['rock', 'paper', 'scissors'];

// 2. Function getHand() returns hand from array w/parseInt(Math.random()*10)%3
function getHand() {
  var hand = hands[parseInt(Math.random() * 10) % 3];
  return hand;
}
// 3. Define two objects for two players. Each player has name and getHand() properties.
var p1 = new Player('AJ');
var p2 = new Player('Noah');

playGame(p1, p2, 5);


function Player(name) {
  Player.name = name;
  Player.hand = getHand;
  Player.score = 0;
}


// 4 Function playRound() takes two player objects as arguments
// Gets hands from each, Determines the winner, Logs the hands played and name of the winner, If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)

function pRound(p1, p2) {
  var p1Hand = p1.hand();
  var p2Hand = p2.hand();

  console.log(p1.name + " ped " + p1Hand);
  console.log(p2.name + " ped " + p2Hand);


// 5 Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object

function playGame(play1, play2, playUntil) {
  setTimeout(function () {
    pRound(play1, play2);
    if (play1.score + play2.score !== playUntil) {
      playGame(play1, play2, playUntil);
    } else {
      if (play1.score > play2.score) {
        console.log(play1.name + " winner " + play1.score + " points");
      } else if (play2.score > play1.score) {
        console.log(play2.name + " winner " + play2.score + " points");
      } else {
        console.log("it's a tie");
      }
    }
  }, 1500);
}



// Play a game to 5 wins