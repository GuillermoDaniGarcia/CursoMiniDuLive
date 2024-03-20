/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'


function App() {

  //Creamos el tablero y una array que rellenamos con 9 posiciones vacias o con el tablero cargado de la partida anterior
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  //Creamos una constante que nos detectará de quién es el turno en cada momento o el yurno de la partida guardada
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  //Creamos constante para declarar un ganador, si es null es que no hay ganador, false es empate
  const[winner, setWinner] = useState(null)


  // Creamos función para resetear los estados a sus valores iniciales y volver a empezar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  //Función que nos actualiza el tablero cada vez que hagamos click
  const updateBoard = (index) =>{

  // No actualizamos esta posición si ya tiene algo, o si hay ganador
  if(board[index] || winner) return

  //Actualiza el indice de la array en el que hagamos click según el turno sin modificar lo que ya había
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)

  // Si el turno es igual al de las x, el siguiente va a ser el de las O y si no, será el de las x
  const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)

  // Guardar partida aqui
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)

  //revisamos si hay un ganador
  const newWinner = checkWinner(newBoard)

  if(newWinner){
  confetti()
  setWinner(newWinner)

  } else if(checkEndGame(newBoard)){
    setWinner(false) //Hay un empate
  }

}

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>

      {/* Creamos una sección para el juego */}

      <section className='game'>
        {
          board.map((square, index) => {
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
              {board[index]}
              </Square>
            )
          })
        }
      </section>

      {/* Creamos otra sección para los turnos */}

      <section className='turn'>
        {/* Cambiamos el estado del componente padre para que el componente hijo se vea de una
        manera u otra */}
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {/* Creamos una seccion para el ganador */}
      <WinnerModal resetGame= {resetGame} winner={winner}/>
    </main>
  )
}

export default App
