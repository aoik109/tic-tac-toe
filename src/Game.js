// Game : he top level component for the Tic-Tac-Toe game

// Child components
import Board from './Board/Board'
import Status from './Status/Status'
import History from './History/History'

const Game = () => {
    return (
        <div className="game-container">
            <h1>Tic-Tac-Toe</h1>
            <Status className="status"/>

            <div className="main-container">
                <h1>Tic-Tac-Toe</h1>
                <Status className="status"/>
                <Board className="board"></Board>
                <div className="history-container">
                <History className="history"/>
            </div>
            </div>

        </div>
    )
}

export default Game