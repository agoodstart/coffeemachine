import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const valuetext = (value) => {
    return `${Math.round(value * 100)}%`;
}

const Extra = (props) => {
    const onChange = (e, value) => {
        if(value !== props.amount) {
            props.setChange(props.id, value);
        }
    }

    return (
        <div>
            <Typography id="discrete-slider-always" gutterBottom>
                {props.name}
            </Typography>
            <Slider
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

export default Extra;