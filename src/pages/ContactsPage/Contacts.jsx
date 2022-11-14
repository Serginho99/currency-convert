import ContactsList from 'components/contactsList/ContactsList';
import AddContactForm from 'components/form/AddContactForm';
import Section from 'components/section/Section';
import React from 'react';
import { Wrapper } from './Contacts.styled';

export default function Contacts() {
  return (
    <>
      <Section>
        <Wrapper>
          <div
            style={{
              borderRight: '2px solid #757575',
              display: 'flex',
            }}
          >
            <AddContactForm />
          </div>
          <div style={{ flexGrow: '1' }}>
            <ContactsList />
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
