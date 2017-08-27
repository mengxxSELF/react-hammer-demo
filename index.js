import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import {Pan} from './components'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Pan}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
    <App/>, document.querySelector('#app'));
