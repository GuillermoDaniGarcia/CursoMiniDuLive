/* eslint-disable react/prop-types */
//Creamos una constante para inicializar una posición en el tablero
export function Square({ children, isSelected, updateBoard, index }) {

    // Si es el turno de la x que se seleccione y se actualice el tablero
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}