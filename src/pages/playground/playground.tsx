import Head from 'next/head'
import PlaygroundWrapper from './styles/playground.style'
import { useState } from 'react';
import Board from './board';
const calculateWinner = (squares: string[]) => {
  const lines = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
export default function PlayGround() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squares) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  
  return (
    <PlaygroundWrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="box">
        <div className='score-board'>
          <p>Player 1: X</p>
          <p>Player 2: O</p>
          <div className={`turn ${winner?"Winner":""}`}>{status}</div>
        </div>
        <div className='game-board'>
          <Board squares={squares} onClick={handleClick}/>
        </div>
      </main>
      </PlaygroundWrapper>
  )
}