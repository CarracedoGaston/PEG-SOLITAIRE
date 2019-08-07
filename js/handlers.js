var addHolesEventHandlers = function(holes) {
  for (var i = 0; i < holes.length; i++) {
    holes[i].onclick = movePeg
  }
}
  
var addPegsEventHandlers = function(pegs) {
  for (var i = 0; i < pegs.length; i++) {
    pegs[i].onclick = selectPeg
  }
}
  
var addResetEventHandlers = function(reset) {
  reset.onclick = resetBoard
}
    
var addSaveEventHandlers = function(save) {
  save.onclick = saveGame    
}

var addLoadGameEventHandlers = function(load) {
  load.onclick = loadGame
}

var showModalSaveEventHandlers = function(modalSave) {
  modalSave.onclick = modalShowSave
}

var showModalLoadEventHandlers = function(modalLoad) {
  modalLoad.onclick = modalShowLoad
}

var hideModalEventHandlers = function(modal) {
  modal.onclick = modalHide
}

var allScoresButton = function(leaderboards) {
  leaderboards.onclick = topTenScores
}
  
