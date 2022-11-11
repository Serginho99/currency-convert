import { useState } from 'react';
import { FormWrapper, ButtonWrapper, Wrapper } from './AddContactForm.styled';
import { useContacts } from 'components/hooks/useContacts';
import { Notify } from 'notiflix';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useToggle from 'components/hooks/useToggle';

const initialState = {
  name: '',
  number: '',
};

export default function AddContactForm() {
  const { isOpen, toggle } = useToggle();
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
    if (name === '' || number === '') {
      return;
    }
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
    <Wrapper>
      <ButtonWrapper>
        {!isOpen && (
          <Button
            style={{
              width: '300px',
              color: '#1565c0',
              background: 'transparent',
              border: '2px solid #1565c0',
            }}
            onClick={toggle}
            variant="contained"
          >
            {isOpen ? 'Cancel' : 'add contact'}
          </Button>
        )}
      </ButtonWrapper>
      {isOpen && (
        <FormWrapper onSubmit={handleSubmit}>
          <div>
            <TextField
              style={{ width: '300px' }}
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={handleChange}
              type="text"
              name="name"
              value={state.name}
            />
          </div>
          <div>
            <TextField
              style={{
                width: '300px',
              }}
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
            style={{ marginRight: '10px', marginTop: '20px', width: '150px' }}
            variant="contained"
            type="submit"
          >
            {isLoading ? 'load' : 'Add contact'}
          </Button>
          <Button
            style={{ marginTop: '20px', width: '150px' }}
            variant="outlined"
            type="button"
            onClick={toggle}
          >
            cancel
          </Button>
        </FormWrapper>
      )}
    </Wrapper>
  );
}
