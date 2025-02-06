import './App.css';
import { useState } from 'react'
import Header from './Header'
import AddItem from './AddItem';
import Content from './Content'
import Footer from './Footer'

function App() {

  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "Das Brot"
    },
    {
        id: 2,
        checked: true,
        item: "Der Wein"
    },
    {
        id: 3,
        checked: false,
        item: "Der Kuchen"
    },
    {
        id: 4,
        checked: false,
        item: "Die Birne"
    }
])

const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem('grocerylist', JSON.stringify(listItems))
}

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('grocerylist', JSON.stringify(listItems))
}

  return (
    <div className="App">
      <Header title = "Grocery" />
      <AddItem />
      <Content 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
