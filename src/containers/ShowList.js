import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectShow from '../actions/shows'
import { bindActionCreators } from 'redux'
import fetchEpisodeList from '../api/episodes'

class ShowList extends Component {
  renderList() {
    const { shows, selectShow } = this.props

    return shows.map(showItem => {
      const show = showItem.show
      const episodes = fetchEpisodeList(show.id)
      
      return <li key={show.id} onClick={() => selectShow(show, episodes)}>
        <div>
          <img src={show.image.medium} />
          <h3>{show.name}</h3>
          <div>{show.genres.join(', ')}</div>
          <div>
            <div>{show.network.name}</div>
            <div>{show.rating.average}</div>
          </div>
        </div>
      </li>
    })
  }

  render() {
    return <ul>{this.renderList()}</ul>
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