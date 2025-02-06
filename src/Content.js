import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ["Boris", "Cari", "Schultz", "Schwartz", "Schmidt", "Angela", "Theresa"]
        const int = Math.floor(Math.random() * 7)
    
        return  names[int]
      }


  return (
    <main>
        <p>Hello {handleNameChange()}!</p>
    </main>
  )
}

export default Content