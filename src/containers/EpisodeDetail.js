import React, { Component } from 'react'
import { connect } from 'react-redux'

class EpisodeDetail extends Component {
  render() {
    const { episode } = this.props
    if(!episode) {
      return <div>Select an episode</div>
    }
    return (
      <div>
        <div>Title {episode.name}</div>
        <div>Season {episode.season}</div>
        <div>Episode {episode.number}</div>
        <div>Airdate {episode.airdate}</div>
        <div dangerouslySetInnerHTML={{__html: episode.summary}}></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    episode: state.activeEpisode
  }
}

export default connect(mapStateToProps)(EpisodeDetail)