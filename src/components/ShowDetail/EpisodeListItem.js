import React from 'react'
import { Link } from 'react-router-dom'
import { colorizeAirdate, formatAirdate } from '../../helpers/airdate'

const EpisodeListitem = ({
  episode,
  selectEpisode
}) => (
  <li onClick={() => selectEpisode(episode)} className="mb-2 mr-2">
    <Link to='/episode'>
      <div className="episodeListItem d-flex">
        <div className="episodeListImage"
            style={{backgroundImage: "url("+(!!episode.image && episode.image.medium)+")"}}></div>
        <div className="ml-2">
          <div className="episodeNo">Season {episode.season} Episode {episode.number}</div>
          <h5 className="episodeHeader">{episode.name}</h5>
          <div className={colorizeAirdate(episode.airdate)}>
            {formatAirdate(episode.airdate)}
          </div>
        </div>
      </div>
    </Link>
  </li>
)

export default EpisodeListitem