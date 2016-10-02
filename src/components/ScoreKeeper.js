import React, { Component } from 'react'

import GameStore from '../stores/GameStore'

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
      <div className="row">
        <h2 className='playerScore'>SCORE: {currentScore}</h2>
      </div>
    )
  }
}
