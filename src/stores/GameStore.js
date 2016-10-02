import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import lodash from 'lodash'

let _currentDrink = {}

let _correctIngredients = []

let _allIngredients = []

let _chosenIngredients = []

let _modal = false

let _glasses = {
  Beermug: '../images/Beermug.png',
  Beerpilsner: '../images/Beerpilsner.png',
  Brandysnifter: '../images/Brandysnifter.png',
  Champagneflute: '../images/Champagneflute.png',
  Cocktailglass: '../images/Cocktailglass.png',
  Coffeemug: '../images/Coffeemug.png',
  Collinsglass: '../images/Collinsglass.png',
  Highballglass: '../images/Highballglass.png',
  Hurricaneglass: '../images/Hurricaneglass.png',
  Irishcoffeecup: '../images/Irishcoffeecup.png',
  MargaritaCoupetteglass: '../images/MargaritaCoupetteglass.png',
  Masonjar: '../images/Masonjar.png',
  Oldfashionedglass: '../images/Oldfashionedglass.png',
  Parfaitglass: '../images/Parfaitglass.png',
  Pintglass: '../images/Pintglass.png',
  Pitcher: '../images/Pitcher.png',
  Poussecafeglass: '../images/Poussecafeglass.png',
  Punchbowl: '../images/Punchbowl.png',
  Redwineglass: '../images/Redwineglass.png',
  Sherryglass: '../images/Sherryglass.png',
  Shotglass: '../images/Shotglass.png',
  Whiskeysourglass: '../images/Whiskeysourglass.png',
  Whitewineglass: '../images/Whitewineglass.png',
  Wineglass: '../images/Wineglass.png',
};

function _getIngredients(theDrink) {
  for (let i = 1; i <= 15; i++) {
    let newIng = eval("theDrink.ingredient"+i)

    newIng ? _allIngredients.push(newIng) : _allIngredients
  }

  _correctIngredients = _allIngredients.slice()
  console.log('correctIngredients: ', _correctIngredients);
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
          _chosenIngredients.push(action.payload.chosenIngredient)
          this.emit('CHANGE')
          break;
        case 'CLEAR_INGREDIENTS':
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
      chosenIngredients: _chosenIngredients
    }
  }
}

export default new GameStore();
