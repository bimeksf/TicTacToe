import Board from './Board';
import { useState } from 'react';
import {calculateWinner} from "../Helper"
import Confetti from 'react-confetti'
import Player from './Player';



export default function Game ()  {
    

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const [playerOneName, setPlayerOneName] = useState("player 1");
    const [playerTwoName, setPlayerTwoName] = useState("player 2");


    const handleClick = i => {
            const boardCopy = [...board]
        
        if(winner || boardCopy[i]) return
            boardCopy[i] = xIsNext ? "X" : "O"
            setBoard(boardCopy)
            setXisNext(!xIsNext)


    }
    



    
    const renderMoves = () => ( 
         <button className="p-4 bg-cyan-900 rounded-md text-lg font-bold hover:scale-110 text-yellow-400 " onClick={() =>{ setBoard(Array(9).fill(null))
            setXisNext(true)}
         }>
        {winner ? "Restart Game" : "Start Game"} </button>

    )
    
    return (
       
        <div className='flex justify-center items-center flex-col gap-4 bg-stone-100 h-screen'>
        <h1 className='font-bold text-3xl font-mono p-10'>Tic Tac Toe</h1>
        <div className='flex gap-4 '>
            <Player pName={playerOneName} symbol="X" setPlayerName={setPlayerOneName}/>
            <Player pName={playerTwoName} symbol="O" setPlayerName={setPlayerTwoName}/>
        </div>
        <Board squares={board} onClick={handleClick} />
        <div className='text-center my-auto font-mono'>
        <p className='text-3xl p-4 font-bold '>{winner ? `Winner is ${winner=== "X"  ? playerOneName : playerTwoName }` : `Next Player: ${(xIsNext ? playerOneName : playerTwoName)}`}</p>
        {renderMoves()}
        {winner && <Confetti
      width={window.innerWidth || 300}
      height={window.innerHeight || 200}
    />}
        </div>
        </div>
    )
}
