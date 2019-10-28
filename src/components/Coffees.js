import React, { Component } from 'react';
import Coffee from './CoffeeMock';

class Coffees extends Component {

    render() {
        return (
        <div>
            {this.props.coffees.map((coffee) => (
            <Coffee
                key={coffee.id}
                coffee={coffee}
                makeCoffee={this.props.makeCoffee}
            />
        ))}
        </div>
        )
    }
}

export default Coffees;
