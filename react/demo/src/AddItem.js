import React from 'react'
import {FaPlus} from 'react-icons/fa'
const AddItem = ({newItem, setNewItem, handleSumbit}) => {
  return (
    <form className ='addForm' onSumbit={handleSumbit(e)}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id='addItem'
        type="text"
        placeholder="Add Item"
        required 
        value = {newItem}
        onChange = {(e) => setNewItem(e.target.value)}
      />
      <button
        type='sumbit3'
      > 
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem