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
 //Create a ladderboard
var generateLaderboard = function(){
    var keys = Object.keys(localStorage)
    var score = 0
    var player = ""
    var html = "<tr id='title'><th>Player</th><th>Score</th></tr>"
    for(var i = 0; i < keys.length; i++){
      html += "<tr id= ladder" + i + " class = 'position'><td>" +  keys[i] +  "</td><td>" +  playerScore(playerBoard(keys[i])).toString() + "</td></tr>"
    }
    return html.toString()
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