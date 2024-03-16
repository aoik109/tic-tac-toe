// Board : consists of all the Squares in the game

import Square from './Square'
import './styles/Board.css'

// TODO: a state = the current state of the board (an array of each Square with value X, O, or null (empty))

const Board = () => {

    return(
        <div className="board-container">
            <Square  value="1"/>
            <Square  value="2"/>
            <Square  value="3"/>
            <Square  value="4"/>
            <Square  value="5"/>
            <Square  value="6"/>
            <Square  value="7"/>
            <Square  value="8"/>
            <Square  value="9"/>
        </div>
    )
}

export default Board