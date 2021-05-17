import React, {useState} from 'react';
import {ModalWrapper, ModalButton, Modal, openModalIcon, closeModalIcon} from '../style.js';

const ListModal = (props) => {
  const [show, setShow] = useState(true);
  const icon = show ? closeModalIcon : openModalIcon
  return (
    <ModalWrapper>
      <ModalButton
        show={show} onClick={() => setShow(!show)}>
        {icon}
      </ModalButton>
      <Modal show={show}>
        <div style={{marginLeft: '5vw'}}>
          <h2>FAQs & Video</h2>
          <ul>
            <li>This is the first FAQ</li>
            <li>This is the second FAQ</li>
            <li>This is the third FAQ</li>
          </ul>
        </div>
      </Modal>
    </ModalWrapper>
  )
}

export default ListModal;