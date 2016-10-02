import React, { Component } from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="backgroundImage"></div>
        <div className='container'>
          <h1 className='app-title'>Cocktail App</h1>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
