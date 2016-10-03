import React, { Component } from 'react'

import DrinkActions from '../actions/DrinkActions'

export default class SearchBar extends Component {
  constructor () {
    super()

    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearchBar = this.clearSearchBar.bind(this);
  }

  clearSearchBar(e) {
    const { searchInput } = this.refs;

    searchInput.value = ''
  }

  handleSearch(e) {
    e.preventDefault()
    const { searchInput } = this.refs;

    let toSearch = searchInput.value;

    DrinkActions.getSearchResults(toSearch);
  }

  render( ) {
    return (
      <div className="row searchBlock">
        <form onSubmit={this.handleSearch}>
          <input onFocus={this.clearSearchBar} type="text" className="searchBar" ref="searchInput" placeholder="search drinks or start with random"/>
          <button className="btn searchBtn">search</button>
        </form>
        <button className='btn btn-info' onClick={() => {DrinkActions.getRandom()}}>get random drink</button>
      </div>
    )
  }
}
