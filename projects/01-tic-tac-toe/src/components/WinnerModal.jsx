/* eslint-disable react/prop-types */
import { Square } from "./Square"
export function WinnerModal ({winner, resetGame}){
    if(winner == null) return null
    const winnerText =  winner == false ? 'Empate' : 'Ha ganado:'
    return(
        <section className='winner'>
            <div className='text'>
                {/* Si no hay ganador, hay empate */}
                <h2>{winnerText}</h2>
                {/* Crea un elemento para enseñar por pantalla quien es el ganador */}
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                {/* Crea un botón que resetea todos los estados a sus valores iniciales */}
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}