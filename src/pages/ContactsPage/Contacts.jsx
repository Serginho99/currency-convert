import ContactsList from 'components/contactsList/ContactsList';
import AddContactForm from 'components/form/AddContactForm';
import Section from 'components/section/Section';
import React from 'react';

export default function Contacts() {
  return (
    <>
      <Section>
        <AddContactForm />
      </Section>
      <Section>
        <ContactsList />
      </Section>
    </>
  );
}
