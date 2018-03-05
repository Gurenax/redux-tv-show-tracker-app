const ActiveShow = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_SELECTED':
      return action.payload
    default:
      return state
  }
}

export default ActiveShow
