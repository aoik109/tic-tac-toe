// Game : he top level component for the Tic-Tac-Toe game
import {useState} from 'react'

// Child components
import Board from './Board/Board'
import Status from './Status/Status'
import History from './History/History'

import './styles/Game.css'

const Game = () => {
    /////STATES and CONSTANTS////
    // all the previous moves, last move is the current state of the board
    const [currentHistory, setCurrentHistory] = useState([Array(9).fill(null)]) 
    // the number of moves so far
    const [moveNum, setMoveNum] = useState(0)
    // who's turn is it? if the moveNum is even, its the "firstPlayer"'s turn
    const isfirstPlayerTurn = moveNum%2===0? true : false;

    ////HELPER FUNCTIONS////
    // Need to pass a function to Board - to change when user interacts with the board
    // Need to pass the currentHistory - so History changes the history every turn
    // Need to pass the current Board and isFirstPlayerTurn to Status - so it can see who's turn or do winner detection

    return (
        <div className="game-container">
            <h1 className="title">Tic-Tac-Toe</h1>
            <Status className="status"/>
            <div className="board-and-history-container">
                <Board className="board"></Board>
                <History className="history"/>
            </div>
        </div>
    )
}

export default Game