import React from 'react';
import { useState } from 'react';
import { useUpdateContactMutation } from 'redux/contacts/contactsApi';

export default function ChangeContact({
  nameContact,
  numberContact,
  id,
  isOpen,
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

  return (
    <>
      <form onSubmit={changeContact}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="text" name="number" value={number} onChange={onChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
}
