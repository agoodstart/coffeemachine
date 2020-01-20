import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles, createStyles} from '@material-ui/styles'

export class StatusMessage extends Component {
    constructor(props) {
        super(props);

        this.state = { message: '' }
    }

    componentDidMount() {
        this.setState({
            message: this.props.message
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.message !== prevState.message) {
            return { message: nextProps.message}
        } else {
            return null;
        }
    }
    
    componentDidUpdate() {

    }
    

    render() {
        const {classes} = this.props;
        return (
            <div>
                {this.state.message.length > 0 &&
                    <Typography className={classes.statusText} variant="h5" gutterBottom>
                        {this.state.message}
                    </Typography>
                }
            </div>
        );
    }
}

const styles = createStyles((theme) => ({
  statusText: {
    color: theme.palette.secondary.light,
    textAlign: 'center'
  },
}));

export default withStyles(styles)(StatusMessage);
