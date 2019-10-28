import React, { useContext, useEffect, useState, useRef } from 'react';
import { ExtrasContext } from './../context';
import Message from './Message';

const Coffee = props => {
    const { name, make } = props.coffee;
    const extrasContext = useContext(ExtrasContext);
    const { cExtras } = extrasContext;

    const [showModal, openModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    function onClick() {
        openModal(true);
        const cb = props.makeCoffee(make, cExtras[0], cExtras[1]);
        cb.info.name = name;
        setModalInfo(cb.info)
        cb.callback(changeValue.bind(this)).then(() => {
            console.log('hello');
        });
    }

    function changeValue() {
        openModal(false);
    }

    return (
        <React.Fragment>
            <button onClick={onClick}>
                {name}
            </button>

            {showModal ? 
                <Message info={modalInfo} />:
                null
            }
        </React.Fragment>
    );
}

export default Coffee;
