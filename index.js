const initialState = [
    [undefined,undefined,1,1,1,undefined,undefined],
    [undefined,undefined,1,1,1,undefined,undefined],
    [1,1,1,1,1,1,1],
    [1,1,1,0,1,1,1],
    [1,1,1,1,1,1,1],
    [undefined,undefined,1,1,1,undefined,undefined],
    [undefined,undefined,1,1,1,undefined,undefined],
];

let dynamicBoard = '<ul>';

for(let  i=0; i < initialState.length;  i++){
    dynamicBoard += '<li>';
    for(let j=0; j < initialState[i].length; j++){
        if(initialState[i][j] == 1){
            dynamicBoard += '<button></button>';
        }
        
    }
    dynamicBoard += '</li>';
}
dynamicBoard += '</ul>';

window.onload = function(){
// Obtenemos el elemento dibujado en el HTML
const boardElement = document.getElementById('board')

// Asignamos dynamicboard
boardElement.innerHTML = dynamicBoard 
}
