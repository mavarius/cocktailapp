import React, { Component } from 'react'

import SearchBar from './SearchBar'
import DrinkList from './DrinkList'

import DrinkStore from '../stores/DrinkStore'
import DrinkActions from '../actions/DrinkActions'

export default class Home extends Component {
  constructor() {
    super();

    this.state = DrinkStore.getAll()
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    DrinkStore.startListening(this._onChange)
  }

  componentDidMount() {
    DrinkActions.getRandom()
    DrinkStore.getAll()
  }

  componentWillUnmount() {
    DrinkStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( DrinkStore.getAll() )
  }

  render() {
    const { randomDrink, searchResults } = this.state;

    return (
      <div className="row searchView">
        <SearchBar randomDrink={randomDrink}/>
        <DrinkList randomDrink={randomDrink} searchResults={searchResults}/>
      </div>
    )
  }
}
