import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import AddItem from "./AddItem"
import { useState  } from 'react'
function App() {
  const [items, setItems] = useState([
    {id:1,
    checked: true,
    item: "Practice Coding"},
    {id:2,
    checked: true,
    item: "Play Cricket"},
    {id:3,
    checked: true,
    item: "Read about AI"}
])
const [newItem, setNewItem] = useState('')

const addItem = (item) =>{
  const id = items.length ? items[items.length -1].id +1 : 1
  const addNewItem ={id, checked:false, item}
  const listItems = [...items, addNewItem]
  setItems(listItems)
  localStorage.setItem("todo_list", JSON.stringify(listItems))
}

const handleCheck = (id) => {
    const listItems = items.map((item) => 
    item.id === id ? {...item,checked:!item.checked} : 
    item )
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
}
const handledelete = (id) => {
    const listItems = items.filter(item => 
    item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
}
const handleSumbit = (e) => {
  e.preventDefault()
  if (!newItem) return;
  console.log(newItem)
  addItem(newItem)
  setNewItem('')

}
  return (
    <div className="App">
      <Header />
      <AddItem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSumbit = {handleSumbit}
      />
      <Content 
      items = {items}
      handleCheck={handleCheck}
      handledelete={handledelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
