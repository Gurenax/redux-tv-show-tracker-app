import fetchEpisodeList from '../api/episodes'

const EpisodesReducer = () => {
  return fetchEpisodeList()
}

export default EpisodesReducer
