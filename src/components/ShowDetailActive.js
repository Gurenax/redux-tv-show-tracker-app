import React from 'react'
import { formatRating, colorizeRating } from '../helpers/rating'

const ShowDetailActive = ({
  activeShow,
  episodeList
}) => (
  <div>
    <div className="d-flex m-2">
      <img src={activeShow.show.image.medium} alt="" width="100"/>
      <div className="ml-2">
        <h3>{activeShow.show.name}</h3>
        <div className="showGenre">{activeShow.show.genres.join(', ')}</div>
        
        <div className="showNetwork">{activeShow.show.network.name}</div>
        <div className={colorizeRating(activeShow.show.rating.average)}>
          {formatRating(activeShow.show.rating.average)}
        </div>
      </div>
    </div>
    <div className="m-2" dangerouslySetInnerHTML={{__html: activeShow.show.summary}}></div>
    <div className="m-2">
      <h5 className="episodeHeader">Episodes</h5>
      <ul className="episodeList d-flex flex-wrap">
        {episodeList}
      </ul>
    </div>
  </div>
)

export default ShowDetailActive