import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'

import Home from './components/Home'
import Game from './components/Game'

render(
  <Router history={browserHistory}>

    <Route path='/' component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/Game/:aParam' component={Game}></Route>
    </Route>

  </Router>,
  document.getElementById('root')
);
