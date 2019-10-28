import Message from './Message';
import React from 'react';
const { forwardRef, useImperativeHandle, useState } = React;

/* TODO:
    Huge refactor: split up displayOnReadyMessage, and displayOnMakingMessage. 
    Might even move the promise to SweetCoffeeMock.js, we'll see...
*/

const Feeder = forwardRef((props, ref) => {

    const [showModal, openModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({message: ''});

    function displayOnMakingMessage(info) {
        
    }

    function displayOnReadyMessage(info) {
        return new Promise((res, rej) => {
            setModalInfo({message: info.onReadyMessage})
            openModal(true)

            setTimeout(() => res(openModal(false)), 2000);
        });
    }

    function closeModal() {
        openModal(false);
    }
    // useImperativeHandle customizes the instance value that is exposed to parent components when using ref.
    useImperativeHandle(ref, () => ({

        getData(obj) {
            const {info} = obj;
            setModalInfo({message: info.onMakingMessage});
            openModal(true);
            obj.callback(closeModal.bind(this)).then(() => {
                displayOnReadyMessage(info).then(() => {
                    console.log('ready to update the state in app.js'); 
                })
            });
        }
  }));

  return (
        <React.Fragment>
            {showModal ? 
                <Message {...modalInfo} />:
                null
            }
        </React.Fragment>
        );
});

export default Feeder;
