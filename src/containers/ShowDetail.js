import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectEpisode from '../actions/episodes'

class ShowDetail extends Component {
  renderEpisodeList(episodes) {
    const { selectEpisode } = this.props

    return episodes.map(episode => {
      return (
        <li key={episode.id} onClick={() => selectEpisode(episode)}>
          <Link to='/episode' className="episodeListItem">
            {!!episode.image && <img src={episode.image.medium} alt="" />}
            Season {episode.season} Episode {episode.number} - {episode.name}
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
        <img src={activeShow.show.image.medium} alt="" />
        <h3>{activeShow.show.name}</h3>
        <div>{activeShow.show.genres.join(', ')}</div>
        <div>
            <div>{activeShow.show.network.name}</div>
            <div>{activeShow.show.rating.average}</div>
        </div>
        <div dangerouslySetInnerHTML={{__html: activeShow.show.summary}}></div>
        <p>Episodes:</p>
        <ul>
          {this.renderEpisodeList(activeShow.episodes)}
        </ul>
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