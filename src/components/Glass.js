import React, { Component } from 'react'

import NavLink from './NavLink'

import Beermug from '../images/Beermug.png'
import Beerpilsner from '../images/Beerpilsner.png'
import Brandysnifter from '../images/Brandysnifter.png'
import Champagneflute from '../images/Champagneflute.png'
import Cocktailglass from '../images/Cocktailglass.png'
import Coffeemug from '../images/Coffeemug.png'
import Collinsglass from '../images/Collinsglass.png'
import Highballglass from '../images/Highballglass.png'
import Hurricaneglass from '../images/Hurricaneglass.png'
import Irishcoffeecup from '../images/Irishcoffeecup.png'
import MargaritaCoupetteglass from '../images/MargaritaCoupetteglass.png'
import Masonjar from '../images/Masonjar.png'
import Oldfashionedglass from '../images/Oldfashionedglass.png'
import Parfaitglass from '../images/Parfaitglass.png'
import Pintglass from '../images/Pintglass.png'
import Pitcher from '../images/Pitcher.png'
import Poussecafeglass from '../images/Poussecafeglass.png'
import Punchbowl from '../images/Punchbowl.png'
import Redwineglass from '../images/Redwineglass.png'
import Sherryglass from '../images/Sherryglass.png'
import Shotglass from '../images/Shotglass.png'
import Whiskeysourglass from '../images/Whiskeysourglass.png'
import Whitewineglass from '../images/Whitewineglass.png'
import Wineglass from '../images/Wineglass.png'

export default class Glass extends Component {
  constructor() {
    super();

    this._chooseGlass = this._chooseGlass.bind(this)
  }

  _chooseGlass() {
    let { glass } = this.props.currentDrink

    switch (glass) {
      case 'Beermug':
        return Beermug
        break;
      case 'Beerpilsner':
        return Beerpilsner
        break;
      case 'Brandysnifter':
        return Brandysnifter
        break;
      case 'Champagneflute':
        return Champagneflute
        break;
      case 'Cocktailglass':
        return Cocktailglass
        break;
      case 'Coffeemug':
        return Coffeemug
        break;
      case 'Collinsglass':
        return Collinsglass
        break;
      case 'Highballglass':
        return Highballglass
        break;
      case 'Hurricaneglass':
        return Hurricaneglass
        break;
      case 'Irishcoffeecup':
        return Irishcoffeecup
        break;
      case 'MargaritaCoupetteglass':
        return MargaritaCoupetteglass
        break;
      case 'Oldfashionedglass':
        return Oldfashionedglass
        break;
      case 'Parfaitglass':
        return Parfaitglass
        break;
      case 'Pintglass':
        return Pintglass
        break;
      case 'Pitcher':
        return Pitcher
        break;
      case 'Poussecafeglass':
        return Poussecafeglass
        break;
      case 'Punchbowl':
        return Punchbowl
        break;
      case 'Redwineglass':
        return Redwineglass
        break;
      case 'Sherryglass':
        return Sherryglass
        break;
      case 'Shotglass':
        return Shotglass
        break;
      case 'Whiskeysourglass':
        return Whiskeysourglass
        break;
      case 'Whitewineglass':
        return Whitewineglass
        break;
      case 'Wineglass':
        return Wineglass
        break;
      default:
        return Oldfashionedglass
    }
  }

  render() {
    return (
      <div className="theGlass">
        <img src={this._chooseGlass()}/>
      </div>
    )
  }
}
