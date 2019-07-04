const initialState = [
    [undefined,undefined,1,1,1,undefined,undefined],
    [undefined,undefined,1,1,1,undefined,undefined],
    [1,1,1,1,1,1,1],
    [1,1,1,0,1,1,1],
    [1,1,1,1,1,1,1],
    [undefined,undefined,1,1,1,undefined,undefined],
    [undefined,undefined,1,1,1,undefined,undefined],
];

let dynamicBoard = '<ul id = "lista">';

for(let  i=0; i < initialState.length;  i++){
    dynamicBoard += '<li>';
    for(let j=0; j < initialState[i].length; j++){
        switch (initialState[i][j]){
            case 1:
                dynamicBoard += '<button class = "defined"></button>';
                break;
            case 0:
            case undefined :
            dynamicBoard += '<button class = "undefined"></button>';
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
