import React, { Component } from 'react'

import classNames from 'classnames'
import GameActions from '../actions/GameActions'
import Ingredients from './Ingredients'
import Recipe from './Recipe'

export default class Modal extends Component {

  closeModal() {
    GameActions.modalSwitch(false);
  }

  render() {
    const { modal, allIngredients, submitted, currentScore, currentDrink, correctPercentage, correctIngredients } = this.props;
    return(
      <div id='myModal' className={classNames({modalOpen: modal, modalClosed: !modal})}>
        <div className='modalContent'>
          { submitted ?
            <div>
              <Recipe currentDrink={currentDrink} currentScore={currentScore} correctIngredients={correctIngredients} correctPercentage={correctPercentage}/>
            </div>
          : <div>
              <span className='close' onClick={this.closeModal}>close</span>
              <Ingredients allIngredients={allIngredients} closeModal={this.closeModal}/>
            </div> }
        </div>
      </div>
    )
  }
}
