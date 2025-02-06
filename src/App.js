import './App.css';
import { useState } from 'react'
import Header from './Header'
import AddItem from './AddItem';
import Content from './Content'
import Footer from './Footer'

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('grocerylist')))

  const [newItem, setNewItem] = useState('')

  const handleLocalStorage = (item) => {
    localStorage.setItem('grocerylist', JSON.stringify(item))
  }

  const addItem = (item) => {
    const id = items.length ? items.length + 1 : 1;
    const newItemObj = { id: id, checked: false, item: item}
    const listItems = [...items, newItemObj]
    setItems(listItems)
    handleLocalStorage(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    handleLocalStorage(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    handleLocalStorage(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    addItem(newItem)
    setNewItem('')

  }

  return (
    <div className="App">
      <Header title = "Grocery" />
      <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit} />
      <Content 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
