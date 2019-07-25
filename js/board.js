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

var getElement = function (id) {
  var elmentent = document.getElementById(id)
  return elmentent || {}
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

//Reset de board to the original values and the score on -1
var resetBoard = function(evt){
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
    init()
}








