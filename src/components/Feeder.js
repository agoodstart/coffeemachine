import Thenable from './../Thenable';
import Modal from './Modal';
import StatusMessage from './StatusMessage';
import React from 'react';
const { forwardRef, useImperativeHandle, useState, useRef } = React;

/* TODO:
    Huge refactor: split up displayOnReadyMessage, and displayOnMakingMessage. 
    Might even move the promise to SweetCoffeeMock.js, we'll see...
*/

const Feeder = forwardRef((props, ref) => {
    // ===== STANDARD MESSAGE ========== // 
    const standardMessage = useRef({
        message: 'Status van de machine'
    })

    const [statusMessage, setStatusMessage] = useState(standardMessage.current);

    function setInitialMessage() {
        setStatusMessage(standardMessage.current);
    }

    function displayStatusMessage(obj) {
        const { info, callback } = obj;

        setStatusMessage({
            message: info.onMakingMessage
        });

        callback(setStatusMessage.bind(this, {message: info.onReadyMessage}))
            .then(() => {
                return new Thenable(setInitialMessage, 2000).then(() => {
                    props.updateState();
                })
        });
    }

    // ========= END STANDARD MESSAGE ========== //

    // ========= MODAL MESSAGE ================= //
    const [showModal, openModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    function toggleModal(message) {
        setModalInfo({message});
        openModal(true);
    }

    function displayModal(obj) {
        const { info, callback } = obj;

        toggleModal(info.onErrorMessage)
            callback(closeModal.bind(this)).then(() => {
                toggleModal(info.onErrorMessage);
                return new Thenable(closeModal, 2000).then(() => {
                    props.resetState();
                });
            });
    }

    function closeModal() {
        openModal(false);
    }
    // =========== END MODAL MESSAGE =========== //

    // useImperativeHandle customizes the instance value that is exposed to parent components when using ref.
    useImperativeHandle(ref, () => ({

        onSuccess(obj) {
            displayStatusMessage(obj);
        },

        onError(obj) {
            displayModal(obj);
        }
  }));

  return (
        <React.Fragment>
            {showModal ? 
                <Modal {...modalInfo} />:
                null
            }
            <StatusMessage {...statusMessage} />
        </React.Fragment>
        );
});

export default Feeder;
