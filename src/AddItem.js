import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = () => {
  return (
    <form className='addForm'>
        <lable htmlFor='addItem'>Add item</lable>
        <input 
            autoFocus
            id='addItem'
            placeholder='Add item'
            type='text'
            required 
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