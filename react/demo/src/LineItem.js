import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";
const LineItem =({item,handleCheck,handledelete}) =>{
    return(
        <li className="item">
                        <input type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked= {item.checked}
                        />
                        <label
                        style ={(item.checked)?
                        {textDecoration: 'line-through'}:null}
                        onDoubleClick={()=>handleCheck(item.id)}
                        >
                        {item.item}</label>
                        <BsFillTrashFill
                            role= "button"
                            onClick={() => handledelete(item.id)}
                            tabIndex="0"
                            aria-label={`Delete ${item.item}`}
                        />
                    </li>
    )
}

export default LineItem