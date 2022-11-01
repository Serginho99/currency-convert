import PropTypes from 'prop-types';
import { TitleList, SearchInput, ContactList } from './ContactsList.styled';
import { useFilter } from 'components/Hooks/useFilter';
import { useFilteredContacts } from 'components/Hooks/useFilteredContacts';
import ContactItem from 'components/СontactItem/ContactItem';
import { useContacts } from 'components/Hooks/useContacts';

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
          {getVisibleContacts?.map(({ name, id, phone }) => {
            return <ContactItem key={id} name={name} phone={phone} id={id} />;
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
