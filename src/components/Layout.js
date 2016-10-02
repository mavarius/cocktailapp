import React, { Component } from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import ScoreKeeper from './ScoreKeeper'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="backgroundImage"></div>
        <div className='container'>
          <h1 className='app-title'>Coding Public House</h1>
          <ScoreKeeper/>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
