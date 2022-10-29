import AddContactForm from './form/AddContactForm';
import ContactsList from './contactsList/ContactsList';
import Section from './section/Section';

export default function App() {
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
