import { useState } from 'react'

function Square({value, onSquareClick}) {
  return (
  <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

//board is top level component
function Board({xIsNext, squares, onPlay}) {
  
  // const [squares, setSquares] = useState(Array(9).fill(null)) // creating 9 square states with default value 'null'

  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)) { // if there is a val in this square OR if there is a winner (if one is not null don't do anything with this click)
      return
    }

    const nextSquares = squares.slice() // making a copy of the squares array to update this current square
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    
    onPlay(nextSquares) // to update the board when the user clicks the squrae
    // setSquares(nextSquares) // setting the state by setting it equal to the updated copy of the squares array
    // setXIsNext(!xIsNext)
  }

  // keeping track of winner or next player
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`
  }

  return (<>
    <h3 className="status">{status}</h3>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => {handleClick(0)}}/>
      <Square value={squares[1]} onSquareClick={() => {handleClick(1)}}/>
      <Square value={squares[2]} onSquareClick={() => {handleClick(2)}}/>
    </div>

    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => {handleClick(3)}}/>
      <Square value={squares[4]} onSquareClick={() => {handleClick(4)}}/>
      <Square value={squares[5]} onSquareClick={() => {handleClick(5)}}/>
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => {handleClick(6)}}/>
      <Square value={squares[7]} onSquareClick={() => {handleClick(7)}}/>
      <Square value={squares[8]} onSquareClick={() => {handleClick(8)}}/>
    </div>
  </>)
}


export default function Game() {
  // state the keeps track if X is the next move
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1] // most current board state

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]) // creates a new array with the new squares appended to the end
    setXIsNext(!xIsNext)
  }

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}