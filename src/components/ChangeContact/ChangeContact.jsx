import React from 'react';
import { useState } from 'react';
import { useUpdateContactMutation } from 'redux/contacts/contactsApi';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './ChangeContact.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function ChangeContact({
  nameContact,
  numberContact,
  id,
  isOpen,
  toggle,
}) {
  const [updateContact] = useUpdateContactMutation();
  const [name, setName] = useState(nameContact);
  const [number, setNumber] = useState(numberContact);

  const options = { name: setName, number: setNumber };

  function onChange({ target: { name, value } }) {
    options[name](value);
  }

  async function changeContact(e) {
    e.preventDefault();

    try {
      await updateContact({ id, data: { name, number } });
      isOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  function onKeyDown(e) {
    if (e.code !== 'Escape') {
      return;
    }
    toggle();
  }

  function clickOnBackdrop(e) {
    if (e.target === e.currentTarget) {
      toggle();
    }
  }

  return createPortal(
    <Overlay onClick={clickOnBackdrop}>
      <Modal>
        <form onSubmit={changeContact}>
          <input type="text" name="name" value={name} onChange={onChange} />
          <input type="text" name="number" value={number} onChange={onChange} />
          <button type="submit">save</button>
        </form>
      </Modal>
    </Overlay>,
    modalRoot
  );
}
