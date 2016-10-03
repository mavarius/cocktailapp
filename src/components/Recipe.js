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
      <div className='revealed'>
        <NavLink className='btn btn-success' to="/" onClick={() => GameActions.reset()} onlyActiveOnIndex>Choose Another Drink</NavLink>

        <div className='row revealedSummary'>
          <span className="revealedDrink"><img src={currentDrink.image}/></span>
          <h1 className="revealedName">{currentDrink.name}</h1>
          <span className='playerScore'>TOTAL SCORE: {currentScore}</span>
          <h2>DRINK SCORE: {correctPercentage}%</h2>
        </div>

        <div className='row revealedRecipe'>
          <div className='ingredientSlots'>
            {correctIngredients.map((ingredient, index) => {
              return (<span key={index} className='ingredient'><img src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}/><span className='ingredientName'>{ingredient}</span></span>)
            })}
          </div>
          <h2 className='recipe'>{currentDrink.instructions}</h2>
        </div>

      </div>
    )
  }
}
