import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/*
* Style
*/
import '../styles/App.css'

/*
* Containers/Components
*/
import ShowList from '../containers/ShowList'
import ShowDetail from '../containers/ShowDetail'

/*
* Create a Redux Store for the RootReducer (needed by Provider)
*/
import RootReducer from '../reducers/rootReducer'
// const store = createStore(RootReducer)
const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>TV Show Tracker App</h1>
          <ShowList />
          <ShowDetail />
        </div>
      </Provider>
    )
  }
}

export default App
