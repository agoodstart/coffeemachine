import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import Feeder from './components/Feeder';
import background from './rect3717.png';
import Coffees from './components/Coffees';
import Extras from './components/Extras';
import State from './State';
import './App.css';
import {ExtrasContextProvider} from './context';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.newState = new State();
    this.childRef = React.createRef();
    
    this.state = {
      extras: this.newState.extras,
      coffees: this.newState.coffees
    };
  }
  

  componentDidMount() {
    const errorObj = this.newState.checkError();

    if(errorObj) {
      this.childRef.current.onError(errorObj)
    }
  }

  componentDidUpdate() {
    console.log('Component Did update');
    console.log(this.state.extras);
  }


  resetState = () => {
    this.setState(this.newState.resetState(this.state));
  }

  updateState = () => {
    this.setState(this.newState.updateState(this.state));
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