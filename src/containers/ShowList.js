import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadShowList } from '../actions/ShowList'
import { selectShow } from '../actions/ShowDetail'
import ShowListItem from '../components/ShowList/ShowListItem'

class ShowList extends Component {
  renderList() {
    const { showList, selectShow } = this.props

    if(!showList.shows) {
      return <div>Loading...</div>
    }

    if(showList.shows.length===0) {
      return <div>No shows available at this time</div>
    }

    return showList.shows.map(showItem => {
      const show = showItem.show
      return <ShowListItem
                key={show.id}
                show={show}
                selectShow={selectShow}
              />
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
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList)