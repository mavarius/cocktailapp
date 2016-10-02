import React, { Component } from 'react'

import DrinkActions from '../actions/DrinkActions'
import GameActions from '../actions/GameActions'

import GameStore from '../stores/GameStore'
import DrinkStore from '../stores/DrinkStore'

import NavLink from './NavLink'
import Modal from './Modal'

import Beermug from '../images/Beer mug.png'

export default class Game extends Component {
  constructor() {
    super();

    this.state = GameStore.getAll()
    this._onChange = this._onChange.bind(this)
    this._getMoreIngredients = this._getMoreIngredients.bind(this)
    this._clearIngredients = this._clearIngredients.bind(this)
  }

  componentWillMount() {
    GameStore.startListening(this._onChange)
  }

  componentDidMount() {
    GameStore.getAll()
    DrinkActions.getDrink(this.props.params.aParam)
  }

  componentWillUnmount() {
    GameStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( GameStore.getAll() )
  }

  _getMoreIngredients() {
    GameActions.getMoreIngredients()
  }

  _clearIngredients() {
    GameActions.clearIngredients()
  }

  openModal() {
    GameActions.modalSwitch(true);
  }

  render() {
    const { currentDrink, modal, correctIngredients, allIngredients, chosenIngredients } = this.state;
    { (allIngredients.length < 20) ? this._getMoreIngredients() : null }
    return (
      <div className="row Game">
        <NavLink className='btn navBtn' to="/" onlyActiveOnIndex>home</NavLink>

        {currentDrink ?
          <div className="secondary">
            <div className='ingredientArea'>
              <span className="drinkThumbs">
                <img src={currentDrink.image} alt=""/>
              </span>

              <div className='ingredientSlots'>
                <button className='btn btn-success' onClick={this.openModal}>ADD INGREDIENT</button><button className='btn btn-danger' onClick={this._clearIngredients}>DUMP DRINK</button>
                {chosenIngredients ?
                  <div>
                    {chosenIngredients.map((ingredient, index) => {
                      return (<span key={index} className='ingredientSlot'><img src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}/>{ingredient}</span>)
                    })}
                  </div>
                : null}
              </div>
            </div>

            <div className="gameDrink">
              <h1 className="gameDrinkName">{currentDrink.name}</h1>
              <img src={Beermug} alt=""/>
            </div>

            <Modal closeModal={this.closeModal} modal={modal} allIngredients={allIngredients}/>

          </div>
        : <span className="loadingMessage">fetching ingredients...</span>}

      </div>
    )
  }
}