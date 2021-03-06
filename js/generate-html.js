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
    html += generateCell(row[j], rowN, j)
  }
  html += '</div>'
  return html
}
  
var generateBoard = function () {
  var html = '<div class="row">'
  for (var i = 0; i < board.length; i++) {
    html += generateRow(board[i], i)
  }
  html += '</div>'
  return html
}

//create a leaderboard of the top 5 players
var generateLeaderboard = function() {
  var keys = Object.keys(localStorage)
  var list = []
  for (var i = 0; i < keys.length; i++) {
    list.push({name: keys[i], score: playerScore(playerBoard(keys[i])), date: JSON.parse(localStorage.getItem(keys[i])).dateToSave})
  }
  list.sort(majortoMinor)
  list.splice(10)
  for(var i = 0; i < list.length; i++) {
    var htmlName = document.getElementById('leader-name-' + i)
    var htmlScore = document.getElementById('leader-score-' + i)
    var htmlDate = document.getElementById('leader-date-' + i)
    htmlName.innerHTML = list[i].name
    htmlScore.innerHTML = list[i].score
    htmlDate.innerHTML = list[i].date
  }
}

//Function used to order a list from major to minor
var majortoMinor = function(a, b) {
    return b.score - a.score
}
