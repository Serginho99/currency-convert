import PropTypes from 'prop-types';
import { ContactList, InputBox, IsTitleListEmpty } from './ContactsList.styled';
import { useFilter } from 'components/hooks/useFilter';
import { useFilteredContacts } from 'components/hooks/useFilteredContacts';
import ContactItem from 'components/contactItem/ContactItem';
import TextField from '@mui/material/TextField';

export default function ContactsList() {
  const { filter, onSetFilter } = useFilter();
  const { getVisibleContacts } = useFilteredContacts();

  function changeFilter(e) {
    const { value } = e.currentTarget;
    onSetFilter(value);
  }

  return (
    <>
      <InputBox>
        <TextField
          style={{
            width: '200px',
          }}
          label="Search contact"
          variant="standard"
          value={filter}
          onChange={changeFilter}
        />
      </InputBox>
      {getVisibleContacts?.length === 0 ? (
        <IsTitleListEmpty>Your contact list is empty :(</IsTitleListEmpty>
      ) : (
        <ContactList>
          {getVisibleContacts
            ?.map(({ name, id, number }) => {
              return (
                <ContactItem key={id} name={name} number={number} id={id} />
              );
            })
            ?.sort((a, b) => a.props.name.localeCompare(b.props.name))}
        </ContactList>
      )}
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};
