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

var init = function () {
  var boardElement = document.getElementById('board')
  boardElement.innerHTML = generateBoard()
 
  var score = document.getElementById('score-right')
  var pegs = boardElement.getElementsByClassName('peg')
  addPegsEventHandlers(pegs)
  var holes = boardElement.getElementsByClassName('hole')
  addHolesEventHandlers(holes)
  var reset = document.getElementById('reset-game')
  addResetEventHandlers(reset)
  var modalShowSave = document.getElementById('save-game')
  showModalSaveEventHandlers(modalShowSave)
  var modalShowLoad = document.getElementById('load-game')
  showModalLoadEventHandlers(modalShowLoad)
  var modalHide = document.getElementById('cancel')
  hideModalEventHandlers(modalHide)
  var modalAcceptSave = document.getElementById('accept-save')
  addSaveEventHandlers(modalAcceptSave)
  var modalAcceptLoad = document.getElementById('accept-load')
  addLoadGameEventHandlers(modalAcceptLoad)
  score.innerHTML = playerScore(board)
  generateLeaderboard()
  winnerResetBoard()
}

window.onload = init
