const selectShow = showPayload => {
  console.log('Show has been selected', showPayload.show.name)

  return {
    type: 'SHOW_SELECTED',
    payload: showPayload
  }
}

module.exports = {
  selectShow
}
