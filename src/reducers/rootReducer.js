import { combineReducers } from 'redux'
import ShowListReducer from './ShowList'
import ActiveShow from './ShowDetail'
import ActiveEpisode from './EpisodeDetail'

const RootReducer = combineReducers({
  showList: ShowListReducer,
  activeShow: ActiveShow,
  activeEpisode: ActiveEpisode
})

export default RootReducer
