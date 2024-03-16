// Status : the current player's turn or the winner
import './styles/Status.css'

// Child components
import Player from './Player'

const Status = () => {
    return (
        <div className="status-container">
            <Player className="player" playerName="1"/>
            <Player className="player" playerName="2"/>
        </div>
    )
}

export default Status