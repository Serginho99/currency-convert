import ContactsList from 'components/СontactsList/ContactsList';
import AddContactForm from 'components/Form/AddContactForm';
import Section from 'components/Section/Section';
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
