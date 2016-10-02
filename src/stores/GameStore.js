import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import lodash from 'lodash'

let _correctPercentage = 0

let _currentScore = 0

let _currentDrink = {}

let _correctIngredients = []

let _allIngredients = []

let _chosenIngredients = []

let _modal = false

let _submitted = false

function _getIngredients(theDrink) {
  _allIngredients = []

  for (let i = 1; i <= 15; i++) {
    let newIng = eval("theDrink.ingredient"+i)

    newIng ? _allIngredients.push(newIng) : _allIngredients
  }

  _correctIngredients = _allIngredients.slice()
}

class GameStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_DRINK':
          _currentDrink = action.payload
          _getIngredients(_currentDrink)
          this.emit('CHANGE')
          break;
        case 'SWITCH_MODAL':
          _modal = action.payload.modalState
          this.emit('CHANGE')
          break;
        case 'RECEIVE_NEW_INGREDIENTS':
          _allIngredients = _allIngredients.concat(action.payload.newIngredients)
          _allIngredients = lodash.shuffle(_allIngredients)
          this.emit('CHANGE')
          break;
        case 'CHOOSE_INGREDIENT':
          _chosenIngredients.unshift(action.payload.chosenIngredient)
          this.emit('CHANGE')
          break;
        case 'CLEAR_INGREDIENTS':
          _chosenIngredients = []
          this.emit('CHANGE')
          break;
        case 'UPDATE_PERCECENTAGE':
          _correctPercentage = action.payload.correctPercentage
          this.emit('CHANGE')
          break;
        case 'UPDATE_SCORE':
          _currentScore += action.payload.correctScore
          _submitted = true
          this.emit('CHANGE')
          break;
        case 'RESET':
          _submitted = false
          _correctPercentage = 0
          _modal = false
          _chosenIngredients = []
          this.emit('CHANGE')
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return {
      currentDrink: _currentDrink,
      modal: _modal,
      correctIngredients: _correctIngredients,
      allIngredients: _allIngredients,
      chosenIngredients: _chosenIngredients,
      correctPercentage: _correctPercentage,
      currentScore: _currentScore,
      submitted: _submitted
    }
  }
}

export default new GameStore();
