import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <lable htmlFor='addItem'>Add item</lable>
        <input 
            autoFocus
            id='addItem'
            placeholder='Add item'
            type='text'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            
        />
        <button 
            type='submit'
            aria-label='Add item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem