import Board from './Board';
import { useState } from 'react';
import {calculateWinner} from "../Helper"
import Confetti from 'react-confetti'
import X from "../assets/X.svg"
export default function Game ()  {
    

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
            const boardCopy = [...board]
        
        if(winner || boardCopy[i]) return
            boardCopy[i] = xIsNext ? "X" : "O"
            setBoard(boardCopy)
            setXisNext(!xIsNext)


    }
    


    const jumpTo = () => {
        
    }
    
    const renderMoves = () => ( 
         <button className="p-4 bg-slate-400 rounded-md text-lg font-bold hover:scale-110" onClick={() => setBoard(Array(9).fill(null))}>
        {winner ? "Restart Game" : "Start Game"} </button>

    )
    
    return (
       
        <div className='flex justify-center items-center flex-col gap-4 bg-yellow-200 h-screen'>
        <h1 className='font-bold text-3xl font-mono p-10'>Tic Tac Toe</h1>
        <Board squares={board} onClick={handleClick} />
        <div className='text-center my-auto font-mono'>
        <p className='text-3xl p-4 font-bold '>{winner ? `Winner is ${winner}` : `Next Player: ${(xIsNext ? 'X' : 'O')}`}</p>
        {renderMoves()}
        {winner && <Confetti
      width={window.innerWidth || 300}
      height={window.innerHeight || 200}
    />}
        </div>
        </div>
    )
}
