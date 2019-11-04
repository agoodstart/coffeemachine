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

    return <Button style={buttonStyle}
            size="large" 
            variant="contained" 
            color="primary"
            onClick={onClick}> {name} </Button>
}

const buttonStyle = {
    width: '150px',
    height: '100px'
}

export default Coffee;
