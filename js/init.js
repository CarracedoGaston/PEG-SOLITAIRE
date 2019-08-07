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
  var score = document.getElementById('score-right')
  var pegs = boardElement.getElementsByClassName('peg')
  var holes = boardElement.getElementsByClassName('hole')
  var reset = document.getElementById('reset-game')
  var modalShowSave = document.getElementById('save-game')
  var modalShowLoad = document.getElementById('load-game')
  var modalHide = document.getElementById('cancel')
  var modalAcceptSave = document.getElementById('accept-save')
  var modalAcceptLoad = document.getElementById('accept-load')
  var allScoreButton = document.getElementById('all-score')
  boardElement.innerHTML = generateBoard()
  generateLeaderboard()
  score.innerHTML = playerScore(board)
  addPegsEventHandlers(pegs)
  addHolesEventHandlers(holes)
  addResetEventHandlers(reset)
  showModalSaveEventHandlers(modalShowSave)
  showModalLoadEventHandlers(modalShowLoad)
  hideModalEventHandlers(modalHide)
  addSaveEventHandlers(modalAcceptSave)
  addLoadGameEventHandlers(modalAcceptLoad)
  allScoresButton(allScoreButton)
  winnerResetBoard()
}

window.onload = init
