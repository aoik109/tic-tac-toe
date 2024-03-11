// Game : he top level component for the Tic-Tac-Toe game

// Child components
import Board from './Board.js'

const Game = () => {
    return (
        <Board className="board"></Board>
    )
}

export default Game