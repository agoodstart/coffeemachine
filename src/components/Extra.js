import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles, createStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const styles = makeStyles((theme) => ({
  extraText: {
    color: theme.palette.secondary.light,
    textAlign: 'right',
    marginRight: '10px'
  },
}));

const PrettoSlider = withStyles({
  root: {
    // color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


const valuetext = (value) => {
    return `${Math.round(value * 100)}%`;
}

const Extra = (props) => {
    const classes = styles();
    const onChange = (e, value) => {
        if(value !== props.amount) {
            props.setChange(props.id, value);
        }
    }

    return (
        <div style={sliderWidth}>
            <Typography id="discrete-slider-always" gutterBottom className={classes.extraText} style={textRight}>
                {props.name}
            </Typography>
            <PrettoSlider
                defaultValue={props.defaultValue}
                aria-labelledby="discrete-slider-always"
                step={0.01} 
                min={0}
                max={1}
                name={props.name}
                valueLabelDisplay="on"
                valueLabelFormat={valuetext}
                onChange={onChange}
            />
        </div>
    )
}

const textRight = {
    textAlign: 'right',
    marginRight: '10px'
}

const sliderWidth = {
    width: '45%',
}

export default Extra;