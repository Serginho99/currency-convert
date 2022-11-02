import PropTypes from 'prop-types';
import { TitleList, SearchInput, ContactList } from './ContactsList.styled';
import { useFilter } from 'components/hooks/useFilter';
import { useFilteredContacts } from 'components/hooks/useFilteredContacts';
import ContactItem from 'components/contactItem/ContactItem';
import { useContacts } from 'components/hooks/useContacts';

export default function ContactsList() {
  const { filter, onSetFilter } = useFilter();
  const { getVisibleContacts } = useFilteredContacts();
  const { isFetching } = useContacts();

  function changeFilter(e) {
    const { value } = e.currentTarget;
    onSetFilter(value);
  }
  return (
    <>
      <TitleList>Contacts</TitleList>

      <SearchInput type="text" value={filter} onChange={changeFilter} />

      {isFetching && <div>...load</div>}
      {getVisibleContacts?.length === 0 ? (
        <div>zero</div>
      ) : (
        <ContactList>
          {getVisibleContacts?.map(({ name, id, number }) => {
            return <ContactItem key={id} name={name} number={number} id={id} />;
          })}
        </ContactList>
      )}
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};
