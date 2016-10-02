import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveRandom(randomDrink) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RANDOM',
      payload: { randomDrink }
    })
  },

  receiveSearchResults(searchResults) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: { searchResults }
    })
  },

  receiveDrink(drink) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_DRINK',
      payload: {
        id: drink.idDrink,
        name: drink.strDrink,
        glass: drink.strGlass,
        instructions: drink.strInstructions,
        image: drink.strDrinkThumb,
        ingredient1: drink.strIngredient1,
        ingredient2: drink.strIngredient2,
        ingredient3: drink.strIngredient3,
        ingredient4: drink.strIngredient4,
        ingredient5: drink.strIngredient5,
        ingredient6: drink.strIngredient6,
        ingredient7: drink.strIngredient7,
        ingredient8: drink.strIngredient8,
        ingredient9: drink.strIngredient9,
        ingredient10: drink.strIngredient10,
        ingredient11: drink.strIngredient11,
        ingredient12: drink.strIngredient12,
        ingredient13: drink.strIngredient13,
        ingredient14: drink.strIngredient14,
        ingredient15: drink.strIngredient15,
        measurement1: drink.strMeasure1,
        measurement2: drink.strMeasure2,
        measurement3: drink.strMeasure3,
        measurement4: drink.strMeasure4,
        measurement5: drink.strMeasure5,
        measurement6: drink.strMeasure6,
        measurement7: drink.strMeasure7,
        measurement8: drink.strMeasure8,
        measurement9: drink.strMeasure9,
        measurement10: drink.strMeasure10,
        measurement11: drink.strMeasure11,
        measurement12: drink.strMeasure12,
        measurement13: drink.strMeasure13,
        measurement14: drink.strMeasure14,
        measurement15: drink.strMeasure15
      }
    })
  },

  receiveNewIngredients(newIngredients) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_NEW_INGREDIENTS',
      payload: { newIngredients }
    })
  }
}

export default ServerActions;
