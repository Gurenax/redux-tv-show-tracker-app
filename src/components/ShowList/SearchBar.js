import React from 'react'
import PropTypes from 'prop-types'

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

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChangeKeyword: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
}

export default SearchBar