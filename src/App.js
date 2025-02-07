import './App.css';
import { useState, useEffect } from 'react'
import Header from './Header'
import SearchItem from './SearchItem'
import AddItem from './AddItem';
import Content from './Content'
import Footer from './Footer'

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('grocerylist')) || [])

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')


  useEffect(() => {
    localStorage.setItem('grocerylist', JSON.stringify(items))
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items.length + 1 : 1;
    const newItemObj = { id: id, checked: false, item: item}
    const listItems = [...items, newItemObj]
    setItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
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
          handleSubmit={handleSubmit}
      />
      <SearchItem 
          search={search}
          setSearch={setSearch}
      />
      <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
