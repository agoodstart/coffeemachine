import React, { Component } from 'react';
import Coffee from './CoffeeMock';

class Coffees extends Component {
    render() {
        return (
        <div style={divStyle}>
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

const divStyle = {
    display: 'flex',
    flexFlow: 'wrap row',
    justifyContent: 'space-around',
    height: '230px',
}

export default Coffees;
