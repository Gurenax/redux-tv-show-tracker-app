import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadShowList } from '../actions/ShowList'
import { selectShow } from '../actions/ShowDetail'
import { formatRating, colorizeRating } from '../helpers/rating'

class ShowList extends Component {
  renderList() {
    const { showList, selectShow } = this.props

    if(!showList.shows) {
      return <div>Loading...</div>
    }

    return showList.shows.map(showItem => {
      const show = showItem.show
      // const episodes = loadEpisodeList(show)
      
      return <li key={show.id} onClick={() => selectShow(show)}>
        <Link to='/show' className="showListItem d-flex m-1">
          <div className="showListImage"
                style={{backgroundImage: "url("+show.image.medium+")"}}></div>
          <div className="ml-2">
            <h4 className="showTitle">{show.name}</h4>
            <div className="showGenre">{show.genres.join(', ')}</div>
            <div className="showBlock d-flex justify-content-between pr-2">
              <div className="showNetwork mr-auto">{show.network.name}</div>
              <div className={colorizeRating(show.rating.average)+' mr-2'}>
                {formatRating(show.rating.average)}
              </div>
            </div>
          </div>
        </Link>
      </li>
    })
  }

  componentDidMount() {
    if(!this.props.showList.shows) {
      this.props.loadShowList()
    }
  }

  render() {
    return <ul className="showList d-flex flex-wrap">{this.renderList()}</ul>
  }
}

const mapStateToProps = state => {
  return {
    showList: state.showList
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadShowList: loadShowList,
      selectShow: selectShow
      // loadEpisodeList: loadEpisodeList
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList)