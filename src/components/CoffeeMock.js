import React, { useContext } from 'react';
import { ExtrasContext } from './../context';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles'


const styles = makeStyles((theme) => ({
    buttonStyle: {
      color: theme.palette.primary,
      textAlign: 'center',
      width: '150px',
      height: '100px',
    },
}));

const Coffee = props => {
    const classes = styles();
    const {name, make} = props.coffee;
    const extrasContext = useContext(ExtrasContext);
    const { cExtras } = extrasContext;

    const obj = {
        coffeeName: name,
        coffeeMethod: make,
        coffeeIngredients: {
            milk: cExtras[0],
            sugar: cExtras[1],
        }
    }

    function onClick() {
        props.makeCoffee(obj);
    }

    return <Button 
                className={classes.buttonStyle}
                size="large" 
                variant="contained" 
                color="primary"
                disabled={props.coffee.disabled}
                onClick={onClick}> {name} 
            </Button>
}
  

export default Coffee;
