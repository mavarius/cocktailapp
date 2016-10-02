import React, { Component } from 'react'

import classNames from 'classnames'
import GameActions from '../actions/GameActions'
import Ingredients from './Ingredients'
import NavLink from './NavLink'

export default class Recipe extends Component {
  constructor() {
    super()

  }

  render() {
    const { currentScore, currentDrink, correctPercentage, correctIngredients } = this.props;
    return(
      <div >
        <NavLink className='btn navBtn' to="/" onClick={() => GameActions.reset()} onlyActiveOnIndex>Choose Another Drink</NavLink>
        <h1 className="gameDrinkName">{currentDrink.name}</h1>
          <span className='playerScore'>TOTAL SCORE: {currentScore}</span>
          <h2>DRINK SCORE: {correctPercentage}%</h2>
          <span className="drinkThumbs"><img src={currentDrink.image}/></span>

          <div className='ingredientSlots'>
            {correctIngredients.map((ingredient, index) => {
              return (<span key={index} className='ingredientSlot'><img src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}/>{ingredient}</span>)
            })}
          </div>
          <h2 className='recipe'>{currentDrink.instructions}</h2>
      </div>
    )
  }
}
