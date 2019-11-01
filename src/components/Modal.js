import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modal = document.getElementById('AppWrapper');

export class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: this.props.message,
            backColor: '#78DAF9'
        }
        this.el = document.createElement('div');
    }
    
    componentDidMount() {
        modal.appendChild(this.el)
        console.log(this.props)
        this.el.classList.add('modal');
        // setTimeout(() => {
        //     this.setState({
        //         message: 'Klaar voor keuze',
        //         backColor: '#00ff00'
        //     })
        // }, 4000);
    }

    componentWillUnmount() {
        modal.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            <div className=''
            style={{
            padding: 20,
            background: this.state.backColor,
            borderRadius: '2px',
            display: 'inline-block',
            minHeight: '300px',
            margin: '1rem',
            position: 'relative',
            minWidth: '300px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center',
          }}
            >
                {this.state.message}
            </div>,
            this.el
        )
    }
}

export default Modal;
