import React, { Component } from 'react'

import classNames from 'classnames'
import GameActions from '../actions/GameActions'

export default class Ingredients extends Component {
  constructor () {
    super()

    this._chooseIngredient = this._chooseIngredient.bind(this)
  }

  _chooseIngredient(e) {
    let chosenIngredient = e.target.value

    GameActions.chooseIngredient(chosenIngredient);
    this.props.closeModal();
  }

  render() {
    const { allIngredients } = this.props;
    return(
      <div>
        {allIngredients.map((ingredient, index) => {
          return (<button key={index} ref='ingredientButton' value={ingredient} onClick={this._chooseIngredient} className='ingredient'><img src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}/><span className='ingredientName'>{ingredient}</span></button>)
        })}
      </div>
    )
  }
}
