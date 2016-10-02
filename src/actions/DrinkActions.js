import API from '../API'
import AppDispatcher from '../AppDispatcher'

const DrinkActions = {
  getRandom() {
    API.getRandom();
  },

  getSearchResults(toSearch) {
    API.getSearchResults(toSearch)
  },

  getDrink(drinkID) {
    API.getDrink(drinkID);
  },

  clearSearch() {
    AppDispatcher.dispatch({
      type: 'CLEAR_SEARCH'
    })
  }
}

export default DrinkActions;
