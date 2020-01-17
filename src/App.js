import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import Feeder from './components/Feeder';
import background from './rect3717.png';
import Coffees from './components/Coffees';
import Extras from './components/Extras';
import SweetCoffeeMock from './controller/SweetCoffeeMock';
import State from './State';
import './App.css';
import {ExtrasContextProvider} from './context';

class App extends Component {
  constructor(props) {
    super(props);

    this.sweetCoffeeMock = new SweetCoffeeMock();
    this.childRef = React.createRef();
    
    this.state = {
      extras: [
      {
        id: 1, 
        name: 'Suiker',
        totalAmount: this.sweetCoffeeMock.sugar,
        currentAmount: 0,
        disabled: false
      },
      {
        id: 2,
        name: 'Melk',
        totalAmount: this.sweetCoffeeMock.milk,
        currentAmount: 0,
        disabled: false
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
        disabled: false
      },
      {
        id: 3,
        name: 'Wiener melange',
        make: this.sweetCoffeeMock.makeWienerMelange,
        disabled: false
      },
      {
        id: 4,
        name: 'Chocolade',
        make: this.sweetCoffeeMock.makeChoco,
        disabled: false
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


  resetState = () => {
    this.sweetCoffeeMock.errorState = 0;
    this.sweetCoffeeMock.making = false;
    this.sweetCoffeeMock.sugar = 1;
    this.sweetCoffeeMock.milk = 1;
    this.sweetCoffeeMock.chocolate = 1;

    this.setState({
      extras: this.state.extras.map(extra => {
        extra.totalAmount = 1;
        extra.currentAmount = 0;
        extra.disabled = false;

        return extra
      }),

    coffees: this.state.coffees.map(coffee => {
      coffee.disabled = false;

      return coffee;
    })
    })
  }

  updateState = () => {
    if(!this.sweetCoffeeMock.errorState) {
      this.sweetCoffeeMock.making = false;
      this.sweetCoffeeMock.errorState = 0;

      this.setState({extras: this.state.extras.map(extra => {
        if(extra.name === 'Suiker') {
          extra.totalAmount = this.sweetCoffeeMock.sugar
          if(this.sweetCoffeeMock.sugar <= 0) {
            extra.disabled = true;
          }
        } else if(extra.name === 'Melk') {
          extra.totalAmount = this.sweetCoffeeMock.milk
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
    } else {
      return;
    }
  }

  sendDataToFeeder(obj) {
    this.childRef.current.getData(obj);
  }

  makeCoffee = (make, milk, sugar, name) => {
      const obj = make(milk.currentAmount, sugar.currentAmount);

      if(!obj.info.error) {
        obj.info.onMakingMessage += name;
        this.childRef.current.onSuccess(obj);
      } else {
        this.childRef.current.onError(obj);
      }
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

          <Feeder resetState={this.resetState} updateState={this.updateState} ref={this.childRef} />
        </div>
      </ColorPalette>
    );
  }
}

export default App;