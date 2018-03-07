import api from './init'

const fetchEpisodeList = showId => {
  return api.get(`/shows/${showId}/episodes`)
}

export default fetchEpisodeList