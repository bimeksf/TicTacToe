import React from 'react';



const Square = ({ value, onClick }) => (
    <button className='border-4 border-black hover:bg-stone-200 text-red-600 font-bold text-lg outline-none' onClick={onClick}>
        {value}
    </button>
);

export default Square;