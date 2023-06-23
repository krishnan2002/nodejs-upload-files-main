import React from 'react'
import ItemsList from './itemsList'

const Content =({items,handleCheck,handledelete}) =>{
    // const [name, setName] = useState("EARN")
    // function handleNameChange(){
    //     const names = ['Earn','Grow','Give']
    //     const int = Math.floor(Math.random()*3) 
    //     setName(names[int])
    // }
    // const [count, setCount]=useState(0)
    // function incrementFunction(){
    //     setCount((count)=> {return count + 1})
    // }
    // function decrementFunction(){
    //     setCount((count)=> {return count - 1})
    // }
 
    return(
        <main>
            {/* <p> Lets {name} Money </p>
            <button onClick={handleNameChange}> Subscribe </button>
            <button onClick={decrementFunction}> - </button>
            <button> {count} </button>
            <button onClick={incrementFunction}> + </button> */}
            {(items.length) ? (
                <ItemsList
                items = {items}
                handleCheck={handleCheck}
                handledelete={handledelete}
            />
            ):<p style ={{marginTop:'2rem'}}>your list is empty</p>}
        </main>
    )
}

export default Content 