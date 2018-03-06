import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

/*
* Style
*/
import '../styles/dist/App.css'

/*
* Containers/Components
*/
import ScrollToTop from './ScrollToTop'
import ShowList from '../containers/ShowList'
import ShowDetail from '../containers/ShowDetail'
import EpisodeDetail from '../containers/EpisodeDetail'

/*
* Create a Redux Store for the RootReducer (needed by Provider)
*/
import RootReducer from '../reducers/rootReducer'
// const store = createStore(RootReducer)
const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Provider store={store}>
            <div className="App">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <div>
                      <h1>TV Show Tracker App</h1>
                      <ShowList />
                    </div>
                  )}
                />
                <Route
                  path="/show"
                  exact
                  render={() => (
                    <ShowDetail />
                  )}
                />
                <Route
                  path="/episode"
                  exact
                  render={() => (
                    <EpisodeDetail />
                  )}
                />
              </Switch>
            </div>
          </Provider>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
