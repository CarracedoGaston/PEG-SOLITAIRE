//Get the board of a player saved
var playerBoard = function(player) {
  var boardsaved
  var load = localStorage.getItem(player)
  boardsaved = JSON.parse(load)
  return boardsaved
}

//Calculate the score of a player saved, using a board
var playerScore = function(boardSaved) {
  var score = -1 //the score start on -1 because the game start with a hole, so the score become 0 on the start
  for (var i = 0; i < boardSaved.length; i++){
    for (var j = 0; j < boardSaved[i].length; j++){
      if (boardSaved[i][j] && boardSaved[i][j].value == 0) {
        score++ 
      }
    }
  }
  return score
}

var saveGame = function() {
  var keys = Object.keys(localStorage)
  var localBoard = JSON.stringify(board)
  var name = document.getElementById('save-input').value
  if ((name.length > 6) || (name.length < 3)  || (!name.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i))) {
    alert('The name could be alphanumeric, and must be between 3 and 6 characters long')
    return
  }
  if(!keys.includes(name)) {
    localStorage.setItem(name, localBoard)
    init()
  }
  if(keys.includes(name)) {
    var load = localStorage.getItem(name)  
    boardSaved = JSON.parse(load)
    if(playerScore(boardSaved) < playerScore(board)) {
      localStorage.setItem(name, localBoard)
      init()  
    }
    else {
      alert('Este jugador ya tiene un record de ' + playerScore(boardSaved).toString() ) 
    }   
  }
  modalHide()
}

var loadGame = function() {
  var name = document.getElementById('save-input').value
  var load = localStorage.getItem(name)  
  board = JSON.parse(load)
  modalHide()
  init()  
}

var resetBoard = function() {
	board = [ 
		[, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
		[, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
		[{ value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }],
		[{ value: 1 }, { value: 1 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 1 }, { value: 1 }],
		[{ value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }],
		[, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
		[, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
	]
	init()
}

var winnerResetBoard = function() {
  if((document.getElementById('modal-label-win').style.display == 'block') && (playerScore(board) == 31)){
    resetBoard()
  }
}