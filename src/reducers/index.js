import { combineReducers } from 'redux'
import ShowReducer from './reducer_shows'
import ActiveShow from './reducer_active_show'
import EpisodesReducer from './reducer_episodes'

const RootReducer = combineReducers({
  shows: ShowReducer,
  activeShow: ActiveShow,
  episodes: EpisodesReducer
})

export default RootReducer
