var modalShowSave = function() {
  document.getElementById('modal').style.display = 'flex'
  document.getElementById('accept-save').style.display = 'block'
}

var modalShowLoad = function() {
  document.getElementById('modal').style.display = 'flex'
  document.getElementById('accept-load').style.display = 'block'
}

var modalHide = function() {
  document.getElementById('modal').style.display = 'none'
  document.getElementById('accept-load').style.display = 'none'
  document.getElementById('accept-save').style.display = 'none'
  document.getElementById('modal-label-lose').style.display = 'none'
  document.getElementById('modal-label-win').style.display = 'none'
}

var topTenScores = function() {
  document.getElementById('table').style.height = '65vh'
  document.getElementById('table').style.width = '100%'
  document.getElementById('table-img').style.display = 'none'
  document.getElementById('table-title').style.width = '100%'
  for (var j = 0; j < 10; j++) {
    document.getElementById('leader-' + j).style.borderBottom = '1px solid #000000a8'
    document.getElementById('leader-name-' + j).style.height = '10%'
    document.getElementById('leader-score-' + j).style.height = '10%'
    document.getElementById('leader-date-' + j).style.height = '10%'
    document.getElementsByClassName('date')[j].style.display = 'table-cell'
  }
  for (var i = 0; i < 5; i++) {
    document.getElementsByClassName('fourthy-leader')[i].style.display = 'table-row'
  }

}
