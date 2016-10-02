import { get } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getRandom() {
    get(`http://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(response => {
        // console.log('Primary response: ', response);
        let randomDrink = response.data.drinks[0];

        ServerActions.receiveRandom(randomDrink);
      })
      .catch(console.error)
  },

  getSearchResults(toSearch) {
    get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${toSearch}`)
      .then(response => {
        // console.log('Primary response: ', response);
        let searchResults;
        searchResults = response.data.drinks.filter(drink => (drink.strDrinkThumb));

        ServerActions.receiveSearchResults(searchResults);
      })
      .catch(console.error)
  },

  getDrink(drinkID) {
    get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`)
      .then(response => {
        // console.log('Secondary response: ', response);
        let drink = response.data.drinks[0];

        ServerActions.receiveDrink(drink);
      })
      .catch(console.error)
  },

  getMoreIngredients() {
    get(`http://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(response => {
        // console.log('Primary response: ', response);
        let randomDrink = response.data.drinks[0];
        let newIngredients = [];

        for (let i = 1; i <= 15; i++) {
          let newIng = eval("randomDrink.strIngredient"+i)
          newIng ? newIngredients.push(newIng) : newIngredients
        }
        
        ServerActions.receiveNewIngredients(newIngredients);
      })
      .catch(console.error)
  }
}

export default API;
