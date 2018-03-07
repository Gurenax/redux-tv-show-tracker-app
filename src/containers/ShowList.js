import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadShowList, searchShow, changeSearchKeyword } from '../actions/ShowList'
import { selectShow } from '../actions/ShowDetail'
import ShowListItem from '../components/ShowList/ShowListItem'
import SearchBar from '../components/ShowList/SearchBar'

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

  onSubmitSearch(keyword) {
    if(!!keyword) {
      this.props.searchShow(keyword)
    }
  }

  onChangeKeyword(event) {
    const { shows } = this.props.showList
    const keyword = event.target.value
    this.props.changeSearchKeyword(shows, keyword)
  }

  componentDidMount() {
    const { showList, loadShowList } = this.props
    if(!showList.shows) {
      loadShowList()
    }
  }

  render() {
    return (
      <div>
        <SearchBar keyword={this.props.showList.searchKeyword}
                  onChangeKeyword={this.onChangeKeyword.bind(this)}
                  onSubmitSearch={this.onSubmitSearch.bind(this)}/>
        <ul className="showList d-flex flex-wrap">{this.renderList()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showList: state.showList,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadShowList: loadShowList,
      searchShow: searchShow,
      changeSearchKeyword: changeSearchKeyword,
      selectShow: selectShow
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList)