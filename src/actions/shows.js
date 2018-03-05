import { SHOW_SELECTED } from '../constants/actionTypes'

const selectShow = (show, episodes) => {
  console.log('Show has been selected', show.name)

  return {
    type: SHOW_SELECTED,
    payload: { show: show, episodes: episodes }
  }
}

export default selectShow
