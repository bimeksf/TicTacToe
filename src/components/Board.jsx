import React from 'react';
import Square from './Square';



const Board = ({ squares, onClick }) => (
        <div className='border-4 border-black rounded-[10px] w-[250px] h-[250px] mx-auto grid grid-cols-3 grid-rows-3
        bg-slate-500 
        '>
{squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}

    </div>
)

export default Board;