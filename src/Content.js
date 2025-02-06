import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <main>
        {items.length ? (
            <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label 
                        style={(item.checked) ? {textDecoration: 'line-through'} : null}
                        onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                    <FaTrashAlt 
                        onClick={() => handleDelete(item.id)}
                        role="button" 
                        tabIndex="0" 
                    />
                </li>
            ))}
        </ul>
        ) : (<h2>Your list is empty!</h2>)} 
    </main>
  )
}

export default Content