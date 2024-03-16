// Game : he top level component for the Tic-Tac-Toe game

// Child components
import Board from './Board'
import Status from './Status'

const Game = () => {
    return (
        <div>
            <div className="main-container">
                <Status className="status"/>
                <Board className="board"></Board>
            </div>

            <div className="history-container">
                
            </div>
        </div>
    )
}

export default Game