import PropTypes from 'prop-types';
import ContactItem from 'components/contactItem/ContactItem';
import { TitleList, SearchInput, ContactList } from './ContactsList.styled';
import { useFilter } from 'components/hooks/useFilter';
import { useFilteredContacts } from 'components/hooks/useFilteredContacts';

export default function ContactsList() {
  const { filter, onSetFilter } = useFilter();
  const { getVisibleContacts } = useFilteredContacts();

  function changeFilter(e) {
    const { value } = e.currentTarget;
    onSetFilter(value);
  }

  return (
    <>
      <TitleList>Contacts</TitleList>
      <SearchInput type="text" value={filter} onChange={changeFilter} />
      <ContactList>
        {getVisibleContacts.map(({ name, id, number }) => {
          return <ContactItem key={id} name={name} number={number} id={id} />;
        })}
      </ContactList>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};
