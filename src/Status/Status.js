// Status : the current player's turn or the winner
import './styles/Status.css'

// Child components
import Player from './Player'

const Status = () => {
    return (
        <div className="status-container">
            <Player className="player" playerName="X"/>
            <Player className="player" playerName="O"/>
        </div>
    )
}

export default Status