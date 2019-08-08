//Get the board of a player saved
var playerBoard = function(player) {
  var load = localStorage.getItem(player)
  var boardsaved = JSON.parse(load)
  return boardsaved.boardToSave
}

//Calculate the score of a player saved, using a board
var playerScore = function(boardSaved) {
  var score = -1 //the score start on -1 because the game start with a hole, so the score become 0 on the start
  for (var i = 0; i < boardSaved.length; i++) {
    for (var j = 0; j < boardSaved[i].length; j++) {
      if (boardSaved[i][j] && boardSaved[i][j].value == 0) {
        score++ 
      }
    }
  }
  return score
}

var saveGame = function() {
  var keys = Object.keys(localStorage)
  var actualDate = new Date
  var date = actualDate.getDate() + '/' + actualDate.getMonth() + '/' + actualDate.getFullYear()
  var objectBoardDate = {boardToSave: board, dateToSave: date}
  var boardDate = JSON.stringify(objectBoardDate)
  var name = document.getElementById('save-input').value
  //validation of a name alphanumeric, between 3 and 5 characters long
  if(name == "") {
    alert('Please insert your name')
    return
  }
  if ((name.length > 5) || (name.length < 3)  || (!name.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i))) {
    alert('The name could be alphanumeric, and must be between 3 and 6 characters long')
    return
  }
  //save the name and his boardDate if the name doesn`t exist on the localstorage
  if(!keys.includes(name)) {
    localStorage.setItem(name, boardDate)
    init()
  }
  //overwrite de boardDate of a player, if the actual score is bigger than his last saved
  if(keys.includes(name)) {
    var load = localStorage.getItem(name)  
    boardDateSaved = JSON.parse(load)
    if(playerScore(boardDateSaved.boardToSave) < playerScore(board)) {
      localStorage.setItem(name, boardDate)
      init()  
    }
    else {
      alert('Este jugador ya tiene un record de ' + playerScore(boardDateSaved.boardToSave).toString()) 
     }   
  }
  modalHide()
}

var loadGame = function() {
  var name = document.getElementById('save-input').value
  var load = localStorage.getItem(name)  
  board = JSON.parse(load).boardToSave
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
  if((document.getElementById('modal-label-win').style.display == 'block') && (playerScore(board) == 31)) {
    resetBoard()
  }
}