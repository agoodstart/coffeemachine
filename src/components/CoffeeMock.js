import React, { useContext } from 'react';
import { ExtrasContext } from './../context';
import Button from '@material-ui/core/Button';

const Coffee = props => {
    const { name, make } = props.coffee;
    const extrasContext = useContext(ExtrasContext);
    const { cExtras } = extrasContext;

    function onClick() {
        props.makeCoffee(make, cExtras[0], cExtras[1], name);
    }

    return <Button 
            size="large" 
            variant="outlined" 
            onClick={onClick}> {name} </Button>
}

export default Coffee;
