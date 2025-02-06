import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <main>
        {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete} />
        ) : (<h2>Your list is empty!</h2>)} 
    </main>
  )
}

export default Content