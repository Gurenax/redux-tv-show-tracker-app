import React from 'react'
import PropTypes from 'prop-types'
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
        <div className="ml-2 d-flex flex-column">
          <div className="episodeNo">Season {episode.season} Episode {episode.number}</div>
          <h5 className="episodeName">{episode.name}</h5>
          <div className={colorizeAirdate(episode.airdate)+' mt-auto mb-1'}>
            {formatAirdate(episode.airdate)}
          </div>
        </div>
      </div>
    </Link>
  </li>
)

EpisodeListitem.propTypes = {
  episode: PropTypes.object.isRequired,
  selectEpisode: PropTypes.func.isRequired
}

export default EpisodeListitem