import React, { Component } from 'react'

import GameStore from '../stores/GameStore'
import NavLink from './NavLink'

export default class ScoreKeeper extends Component {
  constructor() {
    super();

    this.state = GameStore.getAll()
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    GameStore.startListening(this._onChange)
  }

  componentDidMount() {
    GameStore.getAll()
  }

  componentWillUnmount() {
    GameStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( GameStore.getAll() )
  }

  render() {
    const { currentScore } = this.state;

    return (
      <div className="scoreKeeper">
        <NavLink className='btn navBtn' to="/" onClick={() => GameActions.reset()} onlyActiveOnIndex>Choose Another Drink</NavLink>
        <div className="scoreBox">
          <h3>SCORE</h3>
          <h1  className='playerScore'>{currentScore}</h1>
        </div>
      </div>

    )
  }
}
