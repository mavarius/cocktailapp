import React, { Component } from 'react'

import classNames from 'classnames'
import GameActions from '../actions/GameActions'
import Ingredients from './Ingredients'

export default class Modal extends Component {

  closeModal() {
    GameActions.modalSwitch(false);
  }

  render() {
    const { modal, allIngredients } = this.props;
    return(
      <div id='myModal' className={classNames({modalOpen: modal, modalClosed: !modal})}>
        <div className='modalContent'>
          <span className='close' onClick={this.closeModal}>x</span>
            <Ingredients allIngredients={allIngredients} closeModal={this.closeModal}/>
        </div>
      </div>
    )
  }
}
