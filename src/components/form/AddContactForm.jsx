import { useState } from 'react';
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
} from './AddContactForm.styled';
import { useContacts } from 'components/hooks/useContacts';
import { Notify } from 'notiflix';
import { useAddContactMutation } from 'redux/contacts/contactsApi';

const initialState = {
  name: '',
  phone: '',
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
    const { name, phone } = state;
    if (isDuplicateContact({ name, phone })) {
      return Notify.info(`${name}: ${phone} is already on your contact list`);
    }
    try {
      await addContact({ name, phone });
      Notify.success(`${name} added to your contact list`);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  function isDuplicateContact({ name, phone }) {
    return contacts.find(
      contact => contact.name === name && contact.phone === phone
    );
  }

  function reset() {
    setState({ name: '', phone: '' });
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormLabel htmlFor="">
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
      </FormLabel>
      <FormLabel htmlFor="">
        Number:{' '}
        <FormInput
          onChange={handleChange}
          type="tel"
          name="phone"
          value={state.phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit" disabled={isLoading}>
        {isLoading ? 'load' : 'Add contact'}
      </FormButton>
    </FormWrapper>
  );
}
