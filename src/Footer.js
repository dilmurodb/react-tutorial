import React from 'react'

const Footer = ({ length }) => {

    const today = new Date()

  return (
    <footer>
        <p>{length === 1 ? `${length} list item` : `${length} list items`}</p>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer