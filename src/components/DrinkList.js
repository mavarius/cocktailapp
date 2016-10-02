import React, { Component } from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

import DrinkActions from '../actions/DrinkActions'

export default class DrinkList extends Component {
  constructor() {
    super()

    // this._selectItem = this._selectItem.bind(this);
  }

  // ALTERNATE METHOD OF PAGE CHANGE
  // _selectItem(aParam) {
  //   browserHistory.push(`/detail/${aParam}`);
  // }


  render() {
    const { randomDrink, searchResults} = this.props;
    return (
        <div className="row">
          {searchResults ?
            <div className="DrinkList">
              {searchResults.map((drink, index) => {
                return (<NavLink key={index} className='drinkThumbs' to={`/Game/${drink.idDrink}`}><img src={drink.strDrinkThumb}></img><span className='drinkName'>{drink.strDrink}</span></NavLink>)
              })}
            </div>
          : <div><button className='btn btn-info' onClick={() => {DrinkActions.getRandom()}}>Random Drink</button><NavLink className='randomThumb' to={`/Game/${randomDrink.idDrink}`}><img src={randomDrink.strDrinkThumb}></img><span className='randomName'>{randomDrink.strDrink}</span></NavLink></div> || null }
        </div>
    )
  }
}
