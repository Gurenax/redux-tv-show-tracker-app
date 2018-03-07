import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import EpisodeDetailActive from '../components/EpisodeDetail/EpisodeDetailActive'

class EpisodeDetail extends Component {
  static propTypes = {
    activeEpisode: PropTypes.object.isRequired
  }

  render() {
    const { episode } = this.props.activeEpisode
    
    if(!episode) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <div className="navbar headerBar p-2 mb-2">
          <Link to="/show">
            Back to Show
          </Link>
        </div>
        <EpisodeDetailActive episode={episode} />
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