import { combineReducers } from 'redux'
import ShowReducer from './showReducer'
import ActiveShow from './activeShow'
import ActiveEpisode from './activeEpisode'

const RootReducer = combineReducers({
  shows: ShowReducer,
  activeShow: ActiveShow,
  activeEpisode: ActiveEpisode
})

export default RootReducer
