import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadShowList, searchShow, changeSearchKeyword } from '../actions/ShowList'
import { selectShow } from '../actions/ShowDetail'
import ShowListItem from '../components/ShowList/ShowListItem'
import SearchBar from '../components/ShowList/SearchBar'
import SearchCaption from '../components/ShowList/SearchCaption'

class ShowList extends Component {
  renderList() {
    const { showList, selectShow } = this.props

    if (!showList.shows) {
      return <div>Loading...</div>
    }

    if (!showList.searchKeyword && showList.shows.length===0) {
      return <SearchCaption message="Type a show to begin" />
    } else if (!!showList.searchKeyword && !!showList.typing && showList.shows.length===0) {
      return <SearchCaption message="You are typing..." />
    } else if (showList.shows.length===0){
      return <SearchCaption message={'No results for the show '+showList.searchKeyword} />
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
    this.props.searchShow(keyword)
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
        <ul className="showList d-flex flex-wrap m-2 m-lg-4">{this.renderList()}</ul>
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