import React from 'react'

const SearchBar = ({
  keyword,
  onChangeKeyword,
  onSubmitSearch
}) => (
  <div className="navbar headerBar p-2 mb-2">
    <form className="w-100" onSubmit={event => {
      event.preventDefault()
      onSubmitSearch(event.target.searchInput.value)
    }}>
      <input name="searchInput" className="searchInput w-100" type="text" placeholder="Search a TV Show" value={keyword} onChange={onChangeKeyword} />
    </form>
  </div>
)

export default SearchBar