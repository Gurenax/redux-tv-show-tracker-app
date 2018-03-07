import React from 'react'
import PropTypes from 'prop-types'

const SearchCaption = ({
  message
}) => (
  <div className="seearchCaption">{message}</div>
)

SearchCaption.propTypes = {
  message: PropTypes.string.isRequired
}

export default SearchCaption
