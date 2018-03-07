import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectEpisode } from '../actions/EpisodeDetail'
import { loadEpisodeList } from '../actions/ShowDetail'
import EpisodeListItem from '../components/ShowDetail/EpisodeListItem'
import ShowDetailActive from '../components/ShowDetail/ShowDetailActive'

class ShowDetail extends Component {
  static propTypes = {
    activeShow: PropTypes.object.isRequired,
    selectEpisode: PropTypes.func.isRequired,
    loadEpisodeList: PropTypes.func.isRequired
  }

  renderEpisodeList(episodes) {
    const { selectEpisode } = this.props
    return episodes.map(episode => (
      <EpisodeListItem key={episode.id} episode={episode} selectEpisode={selectEpisode} /> 
    ))
  }

  componentDidMount() {
    if(!this.props.activeShow.episodes && !!this.props.activeShow.show) {
      this.props.loadEpisodeList(this.props.activeShow.show)
    }
  }

  render() {
    const { activeShow } = this.props
    if(!activeShow || !activeShow.show){
      return <Redirect to="/" />
    }
    // If episodes list is empty, serve empty array instead
    const episodeList = !!activeShow.episodes ? this.renderEpisodeList(activeShow.episodes) : []

    return (
      <div>
        <div className="navbar headerBar p-2 mb-2">
          <Link to="/">
            Back to List
          </Link>
        </div>
        <ShowDetailActive
          activeShow={activeShow}
          episodeList={episodeList}
        />
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
      selectEpisode: selectEpisode,
      loadEpisodeList: loadEpisodeList
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail)