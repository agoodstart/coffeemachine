import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import Feeder from './components/Feeder';
import background from './rect3717.png';
import Coffees from './components/Coffees';
import Extras from './components/Extras';
import SweetCoffeeMock from './controller/SweetCoffeeMock';
import './App.css';
import {ExtrasContextProvider} from './context';

class App extends Component {
  constructor(props) {
    super(props);

    this.sweetCoffeeMock = new SweetCoffeeMock();
    this.childRef = React.createRef();

    this.disableCapo = () => this.sweetCoffeeMock.milk <= 0 || this.sweetCoffeeMock.sugar <= 0;

    this.disableSugar = () => this.sweetCoffeeMock.sugar <= 0;
    this.disableMilk = () => this.sweetCoffeeMock.milk <= 0;

    this.disableChocoladeAndWiener = () => this.sweetCoffeeMock.chocolate <= 0;
    
    this.state = {
      extras: [
      {
        id: 1, 
        name: 'Suiker',
        amount: this.sweetCoffeeMock.sugar,
        defaultValue: 0,
        disabled: this.disableSugar()
      },
      {
        id: 2,
        name: 'Melk',
        amount: this.sweetCoffeeMock.milk,
        defaultValue: 0,
        disabled: this.disableMilk()
      }
    ],

    coffees: [
      {
        id: 1,
        name: 'Americano',
        make: this.sweetCoffeeMock.makeAmericano,
        disabled: false
      },
      {
        id: 2,
        name: 'Cappuccino',
        make: this.sweetCoffeeMock.makeCapoccino,
        disabled: this.disableCapo()
      },
      {
        id: 3,
        name: 'Wiener melange',
        make: this.sweetCoffeeMock.makeWienerMelange,
        disabled: this.disableChocoladeAndWiener()
      },
      {
        id: 4,
        name: 'Chocolade',
        make: this.sweetCoffeeMock.makeChoco,
        disabled: this.disableChocoladeAndWiener()
      },
      {
        id: 5,
        name: 'Zwarte thee',
        make: this.sweetCoffeeMock.makeBlackTea,
        disabled: false
      },
      {
        id: 6,
        name: 'Earl Gray',
        make: this.sweetCoffeeMock.makeEarlGray,
        disabled: false
      }
    ]
    }
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component Did update');
    console.log(this.state.extras);
  }

  updateState = (milk, sugar) => {
    this.setState({extras: this.state.extras.map(extra => {
      if(extra.name === 'Suiker') {
        extra.amount = this.sweetCoffeeMock.sugar
        if(this.sweetCoffeeMock.sugar <= 0) {
          extra.disabled = true;
        }
      } else if(extra.name === 'Melk') {
        extra.amount = this.sweetCoffeeMock.milk
        if(this.sweetCoffeeMock.milk <= 0) {
          extra.disabled = true;
        }
      }
      return extra;
    }),
    coffees: this.state.coffees.map(coffee => {
      if(coffee.name === 'Cappuccino') {
        if(this.sweetCoffeeMock.sugar <= 0 || this.sweetCoffeeMock.milk <= 0) {
          coffee.disabled = true;
        }
      } else if(coffee.name === 'Chocolade' || coffee.name === 'Wiener melange') {
          if(this.sweetCoffeeMock.chocolate <= 0) {
            coffee.disabled = true;
          }
      }
      return coffee;
    })
  });
  }

  sendDataToFeeder(obj) {
    this.childRef.current.getData(obj);
  }

  makeCoffee = (make, milk, sugar, name) => {
      const obj = make(milk.amount, sugar.amount);
      obj.info.onMakingMessage += name;
      this.sendDataToFeeder(obj)
  }

  render() {
    return (
      <ColorPalette>

        <img src={background} alt="foto" className="picture" />
        <div className="container">

          <ExtrasContextProvider cExtras={this.state.extras}>
            <Coffees 
              coffees={this.state.coffees}
              makeCoffee={this.makeCoffee}
            />
            <Extras />
          </ExtrasContextProvider>

          <Feeder updateState={this.updateState} ref={this.childRef} />
        </div>
      </ColorPalette>
    );
  }
}

export default App;