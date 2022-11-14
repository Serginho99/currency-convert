import ContactsList from 'components/contactsList/ContactsList';
import AddContactForm from 'components/form/AddContactForm';
import Section from 'components/section/Section';
import React from 'react';
import { Wrapper, Box } from './Contacts.styled';

export default function Contacts() {
  return (
    <>
      <Section>
        <Wrapper>
          <Box>
            <AddContactForm />
          </Box>
          <div style={{ flexGrow: '1' }}>
            <ContactsList />
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
