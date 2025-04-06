

import { useState } from "react"


export default function Player({pName, symbol, setPlayerName}){
    const [isEditing , setEditing] = useState(false)  


        function handleChange (e){
                
            setPlayerName(e.target.value)

        }

    function handleClick(){

         setEditing(prev=> !prev )


    }

return<li className="flex flex-col ">
<span className="font-bold p-4 flex flex-col justify-center items-center">
{isEditing ?  <input type="search" onChange={handleChange} value={pName} /> : <span className="">
  {pName}
  </span>}


  <span className="text-red-600 font-bold text-lg">

  {symbol}
  </span>
</span>
<button onClick={handleClick} className="px-4 py-2 p-4  rounded-md text-lg  hover:scale-110 text-yellow-400  bg-cyan-900 ">{isEditing ? "save" : "edit"}</button>

</li>


}