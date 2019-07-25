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
    var score = []
    var number = []
    var html = "<tr id='title'><th>Player</th><th>Score</th></tr>"
    for(var j = 0; j < keys.length; j++){
        score.push(playerScore(playerBoard(keys[j])).toString())
    }
    score.sort(mayorAmenor)
    score.splice(5)
    for(var z = 0; z < keys.length; z++){
        number.push(playerScore(playerBoard(keys[z])).toString())  
    }
    for(var i = 0; i < score.length; i++){
        var player = number.indexOf(score[i].toString()) 
        html += "<tr id= ladder" + i + " class = 'position'><td>" +  keys[player] +  "</td><td>" +  score[i] + "</td></tr>"
    }
    return html.toString()
}

