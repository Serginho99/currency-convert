import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUpdateContactMutation } from 'redux/contacts/contactsApi';

export default function ChangeContact({ nameContact, numberContact, id }) {
  const [updateContact] = useUpdateContactMutation();
  const [name, setName] = useState(nameContact);
  const [number, setNumber] = useState(numberContact);
  const { contactId } = useParams();

  const options = { name: setName, number: setNumber };

  function onChange({ target: { name, value } }) {
    options[name](value);
  }

  async function changeContact(e) {
    e.preventDefault();

    try {
      await updateContact(contactId);
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
