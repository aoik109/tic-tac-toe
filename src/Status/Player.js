// A user in the game

import './styles/Player.css'

const Player = ({playerName}) => {
    return (
        <div className="player-container">
            <h1>Player {playerName}</h1>
        </div>
    )
}

export default Player