import React, { Component } from 'react';

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
        // this.setState({
        //     message: this.props.message
        // })
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default StatusMessage;
