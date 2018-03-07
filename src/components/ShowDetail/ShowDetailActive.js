import React from 'react'
import { formatRating, colorizeRating } from '../../helpers/rating'

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
        {!!activeShow.show.network &&
          <div>
            <div className="showNetwork">{activeShow.show.network.name}</div>
            <div className={colorizeRating(activeShow.show.rating.average)}>
              {formatRating(activeShow.show.rating.average)}
            </div>
          </div>
        }
      </div>
    </div>
    <div className="showSummary m-2" dangerouslySetInnerHTML={{__html: activeShow.show.summary}}></div>
    {episodeList.length>0 ?
      <div className="m-2">
        <h5 className="episodeHeader">Episodes</h5>
        <ul className="episodeList d-flex flex-wrap">
          {episodeList}
        </ul>
      </div>
      : <div className="m-2">Loading episodes...</div>
    }
  </div>
)

export default ShowDetailActive