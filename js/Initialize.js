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

var init = function () {
  var boardElement = document.getElementById('board')
  boardElement.innerHTML = generateBoard()
  var pegs = boardElement.getElementsByClassName('peg')
  addPegsEventHandlers(pegs)
  var holes = boardElement.getElementsByClassName('hole')
  addHolesEventHandlers(holes)
  var score = document.getElementById('score-right')
  score.innerHTML = generateScore()
  generateLeaderboard()
  var reset = document.getElementById('reset-game')
  addResetEventHandlers(reset)
  var modalShowSave = document.getElementById('save-game')
  showModalSaveEventHandlers(modalShowSave)
  var modalShowLoad = document.getElementById('load-game')
  showModalLoadEventHandlers(modalShowLoad)
  var modalHide = document.getElementById('cancel')
  HideModalEventHandlers(modalHide)
  var modalAcceptSave = document.getElementById('accept-save')
  addSaveEventHandlers(modalAcceptSave)
  var modalAcceptLoad = document.getElementById('accept-load')
  addLoadGameEventHandlers(modalAcceptLoad)
}

window.onload = init
