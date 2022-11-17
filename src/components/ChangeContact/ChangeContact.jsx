import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { useUpdateContactMutation } from 'redux/contacts/contactsApi';
import { Button, TextField } from '@mui/material';
import { Form } from './ChangeContact.styled';
import { Notify } from 'notiflix';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContacts } from '../hooks/useContacts';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 500,
  // height: 350,
  bgcolor: 'background.paper',
  border: '1px solid rgb(21,101,192)',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lucida Sans',
      'Lucida Sans Regular',
      'Lucida Grande',
      'Lucida Sans Unicode',
      'Geneva',
      'Verdana',
      'sans - serif',
    ].join(','),
    fontSize: 16,
    // fontWeight: 200,
  },
});

export default function ChangeContact({
  nameContact,
  numberContact,
  id,
  open,
  toggle,
  setIsOpen,
}) {
  const { contacts } = useContacts();
  const [updateContact] = useUpdateContactMutation();
  const [name, setName] = useState(nameContact);
  const [nameError, setNameError] = useState(false);
  const [number, setNumber] = useState(numberContact);
  const [numberError, setNumberError] = useState(false);

  const numberEl = Number(number);

  const options = { name: setName, number: setNumber };

  function onChange({ target: { name, value } }) {
    options[name](value);
    setNumberError(false);
    setNameError(false);
  }

  async function changeContact(e) {
    e.preventDefault();
    if (isDuplicateContact({ name })) {
      setNameError(true);
      return Notify.info(`${name} is already on your contact list`);
    }

    if (name === '' || number === '') {
      return;
    }

    if (!numberEl) {
      setNumberError(true);
      return;
    }

    try {
      await updateContact({ id, data: { name, number } });
      Notify.success('Successfully');
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  function isDuplicateContact({ name }) {
    return contacts.find(contact => contact.name === name);
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      // onClose={toggle}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Form onSubmit={changeContact}>
            <ThemeProvider theme={theme}>
              {nameError ? (
                <div>
                  <TextField
                    style={{
                      width: '300px',
                      marginBottom: '20px',
                      padding: '10px 0px 20px 0px',
                    }}
                    error
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    onChange={onChange}
                    type="text"
                    name="name"
                    value={name}
                    helperText={`${name} is already on your contact list`}
                  />
                </div>
              ) : (
                <div>
                  <TextField
                    style={{
                      width: '300px',
                      marginBottom: '20px',
                      padding: '10px 0px 20px 0px',
                    }}
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    onChange={onChange}
                    type="text"
                    name="name"
                    value={name}
                  />
                </div>
              )}

              {numberError ? (
                <div>
                  <TextField
                    style={{
                      width: '300px',
                      // marginBottom: '30px',
                      padding: '10px 0px 20px 0px',
                    }}
                    id="standard-basic"
                    error
                    label="Number"
                    variant="standard"
                    onChange={onChange}
                    type="tel"
                    name="number"
                    value={number}
                    helperText="Should be a number."
                  />
                </div>
              ) : (
                <div>
                  <TextField
                    style={{
                      width: '300px',
                      // marginBottom: '30px',
                      padding: '10px 0px 20px 0px',
                    }}
                    id="standard-basic"
                    label="Number"
                    variant="standard"
                    onChange={onChange}
                    type="tel"
                    name="number"
                    value={number}
                  />
                </div>
              )}
            </ThemeProvider>
            <Button
              style={{
                marginRight: '10px',
                marginTop: '20px',
                width: '100px',
              }}
              variant="contained"
              type="submit"
            >
              save
            </Button>
            <Button
              style={{ marginTop: '20px', width: '100px' }}
              variant="outlined"
              type="button"
              onClick={toggle}
            >
              cancel
            </Button>
          </Form>
        </Box>
      </Fade>
    </Modal>
  );
}
