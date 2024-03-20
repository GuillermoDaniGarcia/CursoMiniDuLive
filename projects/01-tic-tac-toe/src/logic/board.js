import { WINNER_COMBOS } from "../constants"

//Creamos funcion para checkear si alguien ha ganado o no
export  const checkWinner = (boardToCheck) =>{
//Revisamos todas las combinaciones ganadoras para ver quien ha ganado
for(const combo of WINNER_COMBOS){
    const [a ,b ,c] = combo
    if(
      boardToCheck[a] && //Si el indice en la posición a
      boardToCheck[a] == boardToCheck[b] && //Es igual al índice en la posición b
      boardToCheck[a] == boardToCheck[c] //Y es igual al de la posición c
    ){
//Devuelve quién es el ganador
return boardToCheck[a]
    }
}
// Si no hay ganador
return null
}


// Creamos función que nos chequea si hay empate si no quedan más espacios vacios en el tablero
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
}
