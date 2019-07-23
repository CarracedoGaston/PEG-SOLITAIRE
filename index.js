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

var score = -1

var condScore = false

var createId = function (rowN, colN) {
  return 'peg-' + rowN + '-' + colN
}

var getPositionFromId = function (id) {
  var idParts = id && id.length ? id.split('-') : []
  if (idParts.length === 3) {
      return {
          x: parseInt(idParts[1]),
          y: parseInt(idParts[2])
      }
  }
  return {}
}

var generateCell = function (cell, rowN, colN) {
  var html = '<button id="' + createId(rowN, colN) + '"class="'
  if (cell && cell.value) {
      html += 'peg'
  } 
  else if (cell && cell.value === 0) {
      html += 'hole'
  }
  else {
      html += 'hidden'
  }
  html += '"></button>'
  return html
}

var generateRow = function (row, rowN) {  
  var html = '<div class"row">'
  for (var j = 0; j < row.length; j++) {
      html += generateCell(row[j], rowN, j);
  }
  html += '</div>'
  return html
}

var generateBoard = function () {
  var html = '<div class="row">'
  for (var i = 0; i < board.length; i++) {
      html += generateRow(board[i], i);
  }
  html += '</div>'
  return html
}

var unselectPeg = function () {
  if (selectedPeg.x !== undefined && selectedPeg.y !== undefined) {
      var prevSelectedId = createId(selectedPeg.x, selectedPeg.y)
      document.getElementById(prevSelectedId).className = 'peg'
      var suggestion = document.getElementsByClassName('suggestion')
      for (var i = 0; i < suggestion.length; i++) {
          suggestion[i].className = 'hole'
      }
  }
}

var getElement = function (id) {
  var elmentent = document.getElementById(id)
  return elmentent || {}
}

var showSuggestions = function () {
  var near = {
      above: getElement(createId(selectedPeg.x - 1, selectedPeg.y)),
      left: getElement(createId(selectedPeg.x, selectedPeg.y - 1)),
      right: getElement(createId(selectedPeg.x, selectedPeg.y + 1)),
      bellow: getElement(createId(selectedPeg.x + 1, selectedPeg.y)),
  }
  var possible = {
      above: getElement(createId(selectedPeg.x - 2, selectedPeg.y)),
      left: getElement(createId(selectedPeg.x, selectedPeg.y - 2)),
      right: getElement(createId(selectedPeg.x, selectedPeg.y + 2)),
      bellow: getElement(createId(selectedPeg.x + 2, selectedPeg.y)),
  }
  if (near.above.className == 'peg' && possible.above.className == 'hole') {
      possible.above.className = 'suggestion'
      suggestions.push(possible['above'].id)
  }
  if (near.left.className == 'peg' && possible.left.className == 'hole') {
      possible.left.className = 'suggestion'
      suggestions.push(possible['left'].id)
  }
  if (near.right.className == 'peg' && possible.right.className == 'hole') {
      possible.right.className = 'suggestion'
      suggestions.push(possible['right'].id)
  }
  if (near.bellow.className == 'peg' && possible.bellow.className == 'hole') {
      possible.bellow.className = 'suggestion'
      suggestions.push(possible['bellow'].id)
  }
}

var selectPeg = function (evt) {
  suggestions = []
  var peg = evt.target
  var idParts = peg.id && peg.id.length ? peg.id.split('-') : []
  if (idParts.length === 3) {
      if (selectedPeg.x === parseInt(idParts[1]) && selectedPeg.y === parseInt(idParts[2])) {
          unselectPeg()
          selectedPeg.x = undefined
          selectedPeg.y = undefined
      } 
      else {
          unselectPeg()
          selectedPeg.x = parseInt(idParts[1])
          selectedPeg.y = parseInt(idParts[2])
          peg.className = 'selected'
          showSuggestions()
      }
  }
}

var addPegsEventHandlers = function (pegs) {
  for (var i = 0; i < pegs.length; i++) {
      pegs[i].onclick = selectPeg
  }
}

var movePeg = function (evt) {
  var id = evt.target.id
  var pos = getPositionFromId(id)
  if (pos.x !== undefined && pos.y !== undefined) {
      if (suggestions.includes(id)) {
          var oldRow = selectedPeg.x
          var oldCol = selectedPeg.y
          var newRow = pos.x
          var newCol = pos.y
          var midRow = oldRow + ((newRow - oldRow) / 2)
          var midCol = oldCol + ((newCol - oldCol) / 2)
          board[oldRow][oldCol] = { value: 0 }
          board[midRow][midCol] = { value: 0 }
          board[newRow][newCol] = { value: 1 }
          selectedPeg = { x: undefined, y: undefined }
          suggestions = []
          init()
      }
  }
}

var addHolesEventHandlers = function (holes) {
  for (var i = 0; i < holes.length; i++) {
      holes[i].onclick = movePeg
  }
}

var resetBoard=function(evt){
    var option = confirm("¿Esta seguro que desea reiniciar el juego?")
    board = [ 
        [, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
        [, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
        [{ value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }],
        [{ value: 1 }, { value: 1 }, { value: 1 }, { value: 0 }, { value: 1 }, { value: 1 }, { value: 1 }],
        [{ value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }],
        [, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
        [, , { value: 1 }, { value: 1 }, { value: 1 }, , ,],
    ]
    score = -1
    init()
}
  
var saveGame=function(evt){
    var localBoard=JSON.stringify(board)
    var name = document.getElementById('name').value
    localStorage.setItem(name, localBoard)

  }

var loadGame=function(evt){

    var keys = Object.keys(localStorage)
    var scores = []
    var player = ""
    for(var i=0;i<keys.length;i++){
      // alert(boardLocalstorage(keys[i]))
      player = keys[i] + "   " + scoresLocalstorage(boardLocalstorage(keys[i])).toString()
      scores.push(player)
      
    }
    alert(scores.join("\n"));
    // var name = prompt("Cual es su nombre? ")
    // var load = localStorage.getItem(name)  

    // var num = localStorage.length
    // for(var i=0; i<num;i++){
    //   var load = localStorage.getItem(i)
    //   var boarda = JSON.parse(load)
    //   score = -1;
    //   for (var i=0;i < boarda.length; i++){
    //     for (var j=0;j < boarda[i].length; j++){
    //       if (boarda[i][j]&&boarda[i][j].value==0) {
    //         score++ 
    //       }
    //     }
    //   scores.push(score)
    //   }
    //   alert(keys)
    // }
    // var load = localStorage.getItem(keys[0])
    // board= JSON.parse(load)
    // init() 
    
}

var boardLocalstorage = function(item){
  var boardpro
  var load = localStorage.getItem(item)
  boardpro = JSON.parse(load)
  return boardpro
}
var scoresLocalstorage = function(item){
  var score = -1
  var html = ""
  for (var i=0;i < item.length; i++){
    for (var j=0;j < item[i].length; j++){
      if (item[i][j]&&item[i][j].value==0) {
        score++ 
      }
    }
  }
  return html = score.toString()
}
var showScore = function(){ 
    var html = ""
    score = -1;
    for (var i=0;i < board.length; i++){
      for (var j=0;j < board[i].length; j++){
        if (board[i][j]&&board[i][j].value==0) {
          score++ 
        }
      }
    }
    return html = score.toString()
}

 var addResetEventHandlers=function(reset){
      reset.onclick=resetBoard
     }
  
  var addSaveEventHandlers=function(save){
    save.onclick=saveGame
    
  }
  
  var addLoadGameEventHandlers=function(savedGame){
    savedGame.onclick=loadGame
  }
  

var init = function () {
  var boardElement = document.getElementById('board')
  boardElement.innerHTML = generateBoard()
  var pegs = boardElement.getElementsByClassName('peg')
  addPegsEventHandlers(pegs)
  var holes = boardElement.getElementsByClassName('hole')
  addHolesEventHandlers(holes)
  var score = document.getElementById('scoreright')
  score.innerHTML = showScore()
  var reset = document.getElementById('buttonreset')
  addResetEventHandlers(reset)
  var save=document.getElementById('buttonsave')
  addSaveEventHandlers(save)
  var loadGame = document.getElementById('buttonload')
  addLoadGameEventHandlers(loadGame)
}

window.onload = init






