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
import ShowItem from '../containers/ShowItem'

/*
* Create a Redux Store for the RootReducer (needed by Provider)
*/
import RootReducer from '../reducers/index'
// const store = createStore(RootReducer)
const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>App</h1>
          <ShowList />
          <ShowItem />
        </div>
      </Provider>
    )
  }
}

export default App
