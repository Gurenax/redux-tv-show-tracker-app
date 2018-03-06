import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectEpisode from '../actions/episodes'
import { formatRating, colorizeRating } from '../helpers/rating'
import moment from 'moment'

const colorizeAirdate = dateStr => {
  return moment.utc(dateStr) < moment.utc() ? 'episodeAired' : 'episodeNotAired'
}
const formatAirdate = dateStr => {
  const airDate = moment.utc(dateStr)
  return airDate < moment.utc() ? 'Aired: '+airDate.format('LL') : 'Scheduled to air: '+airDate.format('LL')
}


class ShowDetail extends Component {
  renderEpisodeList(episodes) {
    const { selectEpisode } = this.props

    return episodes.map(episode => {
      return (
        <li key={episode.id} onClick={() => selectEpisode(episode)}>
          <Link to='/episode' className="episodeListItem d-flex">
            
            <div className="episodeListImage"
                style={{backgroundImage: "url("+(!!episode.image && episode.image.medium)+")"}}></div>
            <div className="ml-2">
              <div className="episodeNo">Season {episode.season} Episode {episode.number}</div>
              <h5 className="episodeHeader">{episode.name}</h5>
              <div className={colorizeAirdate(episode.airdate)}>
                {formatAirdate(episode.airdate)}
              </div>
            </div>
          </Link>
        </li>
      )
    })
  }

  render() {
    const { activeShow } = this.props
    if(!activeShow){
      return <Redirect to="/" />
    }

    return (
      <div>
        <div>
          <Link to="/">
            Back to List
          </Link>
        </div>
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
          <ul className="episodeList">
            {this.renderEpisodeList(activeShow.episodes)}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeShow: state.activeShow
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      selectEpisode: selectEpisode
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail)