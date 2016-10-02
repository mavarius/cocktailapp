import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _randomDrink = {};

let _searchResults = null;

let _correctIngredients = []

class DrinkStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_RANDOM':
          _randomDrink = action.payload.randomDrink
          this.emit('CHANGE')
          break;
        case 'RECEIVE_SEARCH_RESULTS':
          _searchResults = action.payload.searchResults
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
      randomDrink: _randomDrink,
      searchResults: _searchResults
    }
  }
}

export default new DrinkStore();
