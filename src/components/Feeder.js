import Message from './Message';
import React from 'react';
const { forwardRef, useImperativeHandle, useState } = React;

const Feeder = forwardRef((props, ref) => {

    const [showModal, openModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    function closeModal() {
        openModal(false);
    }
    // useImperativeHandle customizes the instance value that is exposed to parent components when using ref.
    useImperativeHandle(ref, () => ({

        getData(obj) {
            setModalInfo(obj.info);
            openModal(true);
            obj.callback(closeModal.bind(this)).then(() => {
                console.log('hello');
            });
        }
  }));

  return (
        <React.Fragment>
            {showModal ? 
                <Message info={modalInfo} />:
                null
            }
        </React.Fragment>
        );
});

export default Feeder;
