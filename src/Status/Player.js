// A user in the game

import './styles/Player.css'

const Player = ({playerName}) => {
    return (
        <div className="player-container">
            <h3>Player {playerName}</h3>
        </div>
    )
}

export default Player