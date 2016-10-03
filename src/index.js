import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'

import Home from './components/Home'
import Game from './components/Game'

render(
  <Router history={browserHistory}>

    <Route path='/cocktailapp/' component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/cocktailapp/Game/:aParam' component={Game}></Route>
    </Route>

  </Router>,
  document.getElementById('root')
);
