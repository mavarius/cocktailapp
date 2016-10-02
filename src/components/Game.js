import React, { Component } from 'react'

import DrinkActions from '../actions/DrinkActions'
import GameActions from '../actions/GameActions'

import GameStore from '../stores/GameStore'
import DrinkStore from '../stores/DrinkStore'

import NavLink from './NavLink'
import Modal from './Modal'
import Glass from './Glass'

export default class Game extends Component {
  constructor() {
    super();

    this.state = GameStore.getAll()
    this._onChange = this._onChange.bind(this)
    this._getMoreIngredients = this._getMoreIngredients.bind(this)
    this._clearIngredients = this._clearIngredients.bind(this)
    this._checkDrink = this._checkDrink.bind(this)
    this._giveDrink = this._giveDrink.bind(this)
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
    this._checkDrink()
    GameActions.clearIngredients()
  }

  _checkDrink() {
    const {chosenIngredients, correctIngredients} = this.state;

      let correctScore = 0;

      correctIngredients.forEach((ingredient, i) => {
        if (chosenIngredients.indexOf(ingredient) !== -1) {
          correctScore++;
        }
      })

      let correctPercentage = Math.floor((correctScore / correctIngredients.length) * 100)

      GameActions.updatePercentage(correctPercentage)
  }

  _giveDrink() {
    const {chosenIngredients, correctIngredients} = this.state;

    let correctScore = 0;

    correctIngredients.forEach((ingredient, i) => {
      if (chosenIngredients.indexOf(ingredient) !== -1) {
        correctScore++;
      }
    })

    this.openModal()
    GameActions.updateScore(correctScore)
  }

  openModal() {
    GameActions.modalSwitch(true);
  }

  render() {
    const { currentDrink, modal, correctIngredients, allIngredients, chosenIngredients, currentScore, correctPercentage, submitted } = this.state;

    { (allIngredients.length < 20) ? this._getMoreIngredients() : null }

    return (
      <div className="row Game">
        <NavLink className='btn navBtn' to="/" onClick={() => GameActions.reset()} onlyActiveOnIndex>home</NavLink>

        {currentDrink ?
          <div className="secondary">
            <div className='ingredientArea'>
              <span className="drinkThumbs">
                <img src={currentDrink.image} alt=""/>
              </span>

              <div className='ingredientSlots'>
                <button className='btn btn-danger' onClick={this._clearIngredients}>DUMP DRINK</button>
                {chosenIngredients.length === correctIngredients.length ? <button className='btn btn-success' onClick={this._checkDrink}>CHECK DRINK</button> : <button className='btn btn-info' onClick={this.openModal}>ADD INGREDIENT</button>}
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
              <h2>{correctPercentage}% Correct</h2>
              <Glass currentDrink={currentDrink}/>
              <button className='btn btn-success' onClick={this._giveDrink}>GIVE DRINK</button>
            </div>

            <Modal closeModal={this.closeModal} modal={modal} correctIngredients={correctIngredients} correctPercentage={correctPercentage} allIngredients={allIngredients} currentScore={currentScore} currentDrink={currentDrink} submitted={submitted}/>

          </div>
        : <span className="loadingMessage">fetching ingredients...</span>}

      </div>
    )
  }
}
