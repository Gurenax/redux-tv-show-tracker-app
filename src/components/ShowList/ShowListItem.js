import React from 'react'
import { Link } from 'react-router-dom'
import { formatRating, colorizeRating } from '../../helpers/rating'

const ShowListItem = ({
  show,
  selectShow
}) => (
  <li onClick={() => selectShow(show)}>
    <Link to='/show' className="showListItem d-flex m-1">
      <div className="showListImage"
            style={{backgroundImage: "url("+show.image.medium+")"}}></div>
      <div className="ml-2">
        <h4 className="showTitle">{show.name}</h4>
        <div className="showGenre">{show.genres.join(', ')}</div>
        <div className="showBlock d-flex justify-content-between pr-2">
          <div className="showNetwork mr-auto">{!!show.network && show.network.name}</div>
          <div className={colorizeRating(show.rating.average)+' mr-2'}>
            {formatRating(show.rating.average)}
          </div>
        </div>
      </div>
    </Link>
  </li>
)

export default ShowListItem