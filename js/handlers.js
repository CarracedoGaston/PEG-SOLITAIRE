var addHolesEventHandlers = function (holes) {
    for (var i = 0; i < holes.length; i++) {
        holes[i].onclick = movePeg
    }
}
  
var addPegsEventHandlers = function (pegs) {
    for (var i = 0; i < pegs.length; i++) {
        pegs[i].onclick = selectPeg
    }
}
  
var addResetEventHandlers=function(reset){
    reset.onclick = resetBoard
}
    
var addSaveEventHandlers=function(save){
    save.onclick = saveGame 
}
    
var addLoadGameEventHandlers=function(savedGame){
    savedGame.onclick = loadGame
}
  
