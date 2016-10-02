import API from '../API'
import AppDispatcher from '../AppDispatcher'

const GameActions = {
  modalSwitch(modalState) {
    AppDispatcher.dispatch({
      type: 'SWITCH_MODAL',
      payload: { modalState }
    })
  },

  getMoreIngredients() {
    API.getMoreIngredients()
  },

  chooseIngredient(chosenIngredient) {
    AppDispatcher.dispatch({
      type: 'CHOOSE_INGREDIENT',
      payload: { chosenIngredient }
    })
  },

  clearIngredients() {
    AppDispatcher.dispatch({
      type: 'CLEAR_INGREDIENTS'
    })
  },

  updatePercentage(correctPercentage) {
    AppDispatcher.dispatch({
      type: 'UPDATE_PERCECENTAGE',
      payload: { correctPercentage }
    })
  },

  updateScore(correctScore) {
    AppDispatcher.dispatch({
      type: 'UPDATE_SCORE',
      payload: { correctScore }
    })
  }

}

export default GameActions;
