import React from 'react'
const Content =() =>{
    function handleNameChange(){
        const names = ['Earn','Grow','Give']
        const int = Math.floor(Math.random()*3) 
        return names[int]
    }
    const handleClick=()=>{
        console.log("Thanks for the support")
    }
    return(
        <div>
            <p> Lets {handleNameChange()} Money </p>
            <button onClick={handleClick}> Subscribe </button>
        </div>
    )
}

export default Content 