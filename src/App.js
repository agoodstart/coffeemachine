import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import background from './rect3717.png'
import Coffees from './components/Coffees'
import Extras from './components/Extras';
import Message from './components/Message';
import SweetCoffeeMock from './controller/SweetCoffeeMock';
import './App.css';
import {ExtrasContextProvider} from './context';

class App extends Component {
  constructor(props) {
    super(props);

    this.sweetCoffeeMock = new SweetCoffeeMock();
    
    this.state = {
      message : '',

      extras: [
      {
        id: 1, 
        name: 'Suiker',
        amount: this.sweetCoffeeMock.sugar,
        defaultValue: 0.5,
      },
      {
        id: 2,
        name: 'Melk',
        amount: this.sweetCoffeeMock.milk,
        defaultValue: 0.5,
      }
    ],

    coffees: [
      {
        id: 1,
        name: 'Americano',
        make: this.sweetCoffeeMock.makeAmericano
      },
      {
        id: 2,
        name: 'Cappuccino',
        make: this.sweetCoffeeMock.makeCapoccino
      },
      {
        id: 3,
        name: 'Wiener melange',
        make: this.sweetCoffeeMock.makeWienerMelange
      },
      {
        id: 4,
        name: 'Chocolade',
        make: this.sweetCoffeeMock.makeChoco
      },
      {
        id: 5,
        name: 'Zwarte thee',
        make: this.sweetCoffeeMock.makeBlackTea
      },
      {
        id: 6,
        name: 'Earl Gray',
        make: this.sweetCoffeeMock.makeEarlGray
      }
    ]
    }
  }

  componentDidUpdate() {
    console.log('Component Did update');
  }

  makeCoffee = (make, milk, sugar) => {
    const cb = make(milk.amount, sugar.amount);
    return cb;
  }

  render() {
    return (
      <React.Fragment>
        <img src={background} alt="foto" className="picture" />
        <div className="container">
          <ExtrasContextProvider cExtras={this.state.extras}>
            <Coffees 
              coffees={this.state.coffees}
              makeCoffee={this.makeCoffee}
            />
            <Extras />
          </ExtrasContextProvider>
        </div>
      </React.Fragment>
    );
  }
}

export default App;