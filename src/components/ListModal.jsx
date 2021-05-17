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
          <h3>FAQs</h3>
          <ul>
            <li>FAQ 1</li>
            <li>FAQ 2</li>
            <li>FAQ 3</li>
          </ul>
        </div>
      </Modal>
    </ModalWrapper>
  )
}

export default ListModal;