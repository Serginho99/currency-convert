import { useState } from 'react';
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
  TextInput,
  Btn,
} from './AddContactForm.styled';
import { useContacts } from 'components/hooks/useContacts';
import { Notify } from 'notiflix';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import Button from '@mui/material/Button';
// import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const initialState = {
  name: '',
  number: '',
};

export default function AddContactForm() {
  const [state, setState] = useState(initialState);
  const { contacts } = useContacts();
  const [addContact, { isLoading }] = useAddContactMutation();

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, number } = state;
    if (isDuplicateContact({ name, number })) {
      return Notify.info(`${name}: ${number} is already on your contact list`);
    }
    try {
      await addContact({ name, number });
      Notify.success(`${name} added to your contact list`);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  function isDuplicateContact({ name, number }) {
    return contacts.find(
      contact => contact.name === name && contact.number === number
    );
  }

  function reset() {
    setState({ name: '', number: '' });
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {/* <FormLabel htmlFor="">
        Name:{' '}
        <FormInput
          onChange={handleChange}
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel> */}
      <div>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={handleChange}
          type="text"
          name="name"
          value={state.name}
        />
      </div>
      {/* <FormLabel htmlFor="">
        Number:{' '}
        <FormInput
          onChange={handleChange}
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel> */}
      <div>
        <TextField
          id="standard-basic"
          label="Number"
          variant="standard"
          onChange={handleChange}
          type="tel"
          name="number"
          value={state.number}
        />
      </div>
      <Button
        style={{ marginTop: '20px', width: '150px' }}
        variant="contained"
        type="submit"
      >
        {isLoading ? 'load' : 'Add contact'}
      </Button>
      {/* <FormButton type="submit" disabled={isLoading}>
        {isLoading ? 'load' : 'Add contact'}
      </FormButton> */}
    </FormWrapper>
  );
}
