import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class EpisodeDetail extends Component {
  render() {
    const { episode } = this.props.activeEpisode
    
    if(!episode) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <div>
          <Link to="/show">
            Back to Show
          </Link>
        </div>
        {!!episode.image && <img src={episode.image.original} alt="" width="300" />}
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
    activeEpisode: state.activeEpisode
  }
}

export default connect(mapStateToProps)(EpisodeDetail)