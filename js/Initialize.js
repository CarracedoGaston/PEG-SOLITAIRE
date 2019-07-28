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

window.addEventListener('load', function(){
  this.setTimeout(function(){
    window.scrollTo(0, 1) 
  }, 0)
})

var init = function () {
  var boardElement = document.getElementById('board')
  boardElement.innerHTML = generateBoard()
  var pegs = boardElement.getElementsByClassName('peg')
  addPegsEventHandlers(pegs)
  var holes = boardElement.getElementsByClassName('hole')
  addHolesEventHandlers(holes)
  var score = document.getElementById('scoreRight')
  score.innerHTML = generateScore()
  var leader = document.getElementById('table')
  leader.innerHTML = generateLeaderboard()
  var reset = document.getElementById('resetGame')
  addResetEventHandlers(reset)
  var save = document.getElementById('saveGame')
  addSaveEventHandlers(save)
  var loadGame = document.getElementById('loadGame')
  addLoadGameEventHandlers(loadGame)
}

window.onload = init
