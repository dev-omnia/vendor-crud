import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { Login } from './login/'
import { Home } from './home/'
import { history } from './_helpers'
import { PrivateRoute } from './_components'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router history={history}>
          <div>
            <Switch>
              <PrivateRoute exact path='/home' component={Home} />
              <Route exact path='/' component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
