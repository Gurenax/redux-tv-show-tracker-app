import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowItem extends Component {
  renderEpisodeList(episodes) {
    return episodes.map(episode => {
      return(
        <li key={episode.id}>
          Season {episode.season} Episode {episode.number} - {episode.name}
        </li>
      )
    })
  }

  render() {
    console.log(this.props)
    const { activeShow } = this.props
    if(!activeShow){
      return <div>Select a show</div>
    }

    return (
      <div>
        {activeShow.show.name}
        <p>Episodes:</p>
        <ul>
          {this.renderEpisodeList(activeShow.episodes)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeShow: state.activeShow
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       selectShow: selectShow
//     },
//     dispatch
//   )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ShowList)
export default connect(mapStateToProps)(ShowItem)