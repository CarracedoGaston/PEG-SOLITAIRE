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
