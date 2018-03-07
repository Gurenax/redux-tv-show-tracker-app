import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectEpisode } from '../actions/EpisodeDetail'
import { loadEpisodeList } from '../actions/ShowDetail'
import EpisodeListItem from '../components/EpisodeListItem'
import ShowDetailActive from '../components/ShowDetailActive'

class ShowDetail extends Component {
  renderEpisodeList(episodes) {
    const { selectEpisode } = this.props
    return episodes.map(episode => (
      <EpisodeListItem key={episode.id} episode={episode} selectEpisode={selectEpisode} /> 
    ))
  }

  componentDidMount() {
    if(!this.props.activeShow.episodes) {
      this.props.loadEpisodeList(this.props.activeShow.show)
    }
  }

  render() {
    const { activeShow } = this.props
    if(!activeShow || !activeShow.show){
      return <Redirect to="/" />
    }
    return (
      <div>
        <div>
          <Link to="/">
            Back to List
          </Link>
        </div>
        <ShowDetailActive
          activeShow={activeShow}
          episodeList={!!activeShow.episodes && this.renderEpisodeList(activeShow.episodes)}
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