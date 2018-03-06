import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectEpisode from '../actions/episodes'
import { bindActionCreators } from 'redux'
import EpisodeDetail from '../containers/EpisodeDetail'

class ShowDetail extends Component {
  renderEpisodeList(episodes) {
    const { selectEpisode } = this.props

    return episodes.map(episode => {
      return (
        <li key={episode.id} onClick={() => selectEpisode(episode)}>
          {!!episode.image && <img src={episode.image.medium} />}
          Season {episode.season} Episode {episode.number} - {episode.name}
        </li>
      )
    })
  }

  render() {
    const { activeShow } = this.props
    if(!activeShow){
      return <div>Select a show</div>
    }

    return (
      <div>
        <h2>Show Detail</h2>
        <img src={activeShow.show.image.medium} />
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

        <EpisodeDetail />
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