import React from 'react'
import { Link } from 'react-router-dom'
import { formatRating, colorizeRating } from '../../helpers/rating'

const ShowListItem = ({
  show,
  selectShow
}) => (
  <li onClick={() => selectShow(show)}>
    <Link to='/show'>
      <div className="showListItem d-flex m-1">
        <div className="showListImage"
            style={{backgroundImage: "url("+(!!show.image && show.image.medium)+")"}}></div>
        <div className="">
          <h4 className="showTitle mx-2">{show.name}</h4>
          <div className="showGenre mx-2">{show.genres.join(', ')}</div>
          <div className="showBlock d-flex justify-content-between mx-2">
            <div className="showNetwork mr-auto">{!!show.network && show.network.name}</div>
            <div className={colorizeRating(show.rating.average)+' mr-2'}>
              {formatRating(show.rating.average)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </li>
)

export default ShowListItem