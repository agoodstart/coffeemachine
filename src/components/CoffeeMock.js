import React, { useContext } from 'react';
import { ExtrasContext } from './../context';

const Coffee = props => {
    const { name, make } = props.coffee;
    const extrasContext = useContext(ExtrasContext);
    const { cExtras } = extrasContext;

    function onClick() {
        props.makeCoffee(make, cExtras[0], cExtras[1], name);
    }

    return <button onClick={onClick}> {name} </button>
}

export default Coffee;
