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
    const { name, make } = props.coffee;
    const extrasContext = useContext(ExtrasContext);
    const { cExtras } = extrasContext;

    function onClick() {
        console.log(cExtras)
        props.makeCoffee(make, cExtras[0], cExtras[1], name);
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
