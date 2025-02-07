import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <lable htmlFor='search'>Search</lable>
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Serach items'
    />
    </form>
  )
}

export default SearchItem