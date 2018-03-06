import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectShow from '../actions/shows'
import fetchEpisodeList from '../api/episodes'

const formatRating = rating => {
  return !rating ? 'Not rated' : 'Rating ' + rating
}

const colorizeRating = rating => {
  if(rating>=7) {
    return "showRatingGood"
  } else if(rating>=5) {
    return "showRatingAvg"
  } else {
    return "showRatingBad"
  }
}

class ShowList extends Component {
  renderList() {
    const { shows, selectShow } = this.props

    return shows.map(showItem => {
      const show = showItem.show
      const episodes = fetchEpisodeList(show.id)
      
      return <li key={show.id} onClick={() => selectShow(show, episodes)}>
        <Link to='/show' className="showListItem d-flex m-2">
          <div className="showListImage"
                style={{backgroundImage: "url("+show.image.medium+")"}}></div>
          <div className="ml-2">
            <h4 className="showTitle">{show.name}</h4>
            <div className="showGenre">{show.genres.join(', ')}</div>
            <div className="showBlock d-flex justify-content-between">
              <div className="showNetwork mr-auto">{show.network.name}</div>
              <div className={colorizeRating(show.rating.average)+' mr-2'}>{formatRating(show.rating.average)}</div>
            </div>
          </div>
        </Link>
      </li>
    })
  }

  render() {
    return <ul className="showList">{this.renderList()}</ul>
  }
}

const mapStateToProps = state => {
  return {
    shows: state.shows
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      selectShow: selectShow
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList)