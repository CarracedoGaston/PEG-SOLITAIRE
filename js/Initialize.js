var board = [ 
    [, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
    [, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
    [{ value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }],
    [{ value: 1 }, { value: 1 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 1 }, { value: 1 }],
    [{ value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }],
    [, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
    [, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
  ]
  
var selectedPeg = { x: undefined, y: undefined }

var suggestions = []

var mayorAmenor = function(elemt1, elemt2){
  return elemt2-elemt1
}
//Create a score about the board on game
var generateScore = function(){ 
  score = -1;  
  for (var i=0;i < board.length; i++){
    for (var j=0;j < board[i].length; j++){
      if (board[i][j]&&board[i][j].value==0) {
        score++ 
      }
    }
  }
  return score
}

var init = function () {
  var boardElement = document.getElementById('board')
  boardElement.innerHTML = generateBoard()
  var pegs = boardElement.getElementsByClassName('peg')
  addPegsEventHandlers(pegs)
  var holes = boardElement.getElementsByClassName('hole')
  addHolesEventHandlers(holes)
  var score = document.getElementById('scoreright')
  score.innerHTML = generateScore()
  var leader = document.getElementById('table')
  leader.innerHTML = generateLeaderboard()
  var reset = document.getElementById('buttonreset')
  addResetEventHandlers(reset)
  var save = document.getElementById('buttonsave')
  addSaveEventHandlers(save)
  var loadGame = document.getElementById('buttonload')
  addLoadGameEventHandlers(loadGame)
}

window.onload = init
