import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <lable htmlFor='search'></lable>
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Serach items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
    </form>
  )
}

export default SearchItem