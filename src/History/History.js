// History : the past states of the current game

import Turn from './Turn'

import './History.css'

const History = () => {
    return (
        <div className="history-container">
            <h4>Game History</h4>
            <div className="turn-container">
                <Turn/>
            </div>
        </div>
    )
}

export default History