import React from 'react'
import PropTypes from 'prop-types'

const SearchCaption = ({
  message
}) => (
  <div className="searchCaption">{message}</div>
)

SearchCaption.propTypes = {
  message: PropTypes.string.isRequired
}

SearchCaption.defaultProps = {
  message: ''
}

export default SearchCaption
