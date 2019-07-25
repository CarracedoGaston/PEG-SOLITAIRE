//Get the board of a player saved
var playerBoard = function(player){
  var boardsaved
  var load = localStorage.getItem(player)
  boardsaved = JSON.parse(load)
  return boardsaved
}

//Calculate the score of a player saved, using a board
var playerScore = function(boardSaved){
  var score = -1
  for (var i = 0; i < boardSaved.length; i++){
    for (var j = 0; j < boardSaved[i].length; j++){
      if (boardSaved[i][j] && boardSaved[i][j].value == 0) {
        score++ 
      }
    }
  }
  return score
}
//An alert that show the ladderboard
var ladderboardAlert = function(){
  var keys = Object.keys(localStorage)
  var scores = []
  var gameSaved = "Player" + "   " + "Score"
  scores.push(gameSaved)
  for(var i = 0; i < keys.length; i++){
    gameSaved = keys[i] + "   " + playerScore(playerBoard(keys[i])).toString()
    scores.push(gameSaved)
    scores.sort()
  }
  alert(scores.join("\n"));
}
//Save the game, and show the laderboard on an alert
var saveGame = function(evt){
  var localBoard = JSON.stringify(board)
  var name = document.getElementById('name').value
  localStorage.setItem(name, localBoard)
  ladderboardAlert()
  init()
}
//Load a saved game
var loadGame = function(evt){
  var name = prompt("Cual es su nombre? ")
  var load = localStorage.getItem(name)  
  board = JSON.parse(load)
  init()  
}