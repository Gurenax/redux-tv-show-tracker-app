import React from 'react'
import { colorizeAirdate, formatAirdate } from '../../helpers/airdate'

const EpisodeDetailActive = ({
  episode
}) => (
  <div>
    <div className="m-2">
      <h3>{episode.name}</h3>
      <div className="episodeNo">Season {episode.season} Episode {episode.number}</div>
      <div className={colorizeAirdate(episode.airdate)}>
        {formatAirdate(episode.airdate)}
      </div>
      {!!episode.image && <img src={episode.image.original} alt="" width="300" />}
    </div>
    <div className="episodeSummary m-2" dangerouslySetInnerHTML={{__html: episode.summary}}></div>
  </div>
)

export default EpisodeDetailActive