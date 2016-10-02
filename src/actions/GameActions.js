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
  }

}

export default GameActions;
