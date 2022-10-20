import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Item, Text, BtnDelete } from './ContactItem.styled';
import { Notify } from 'notiflix';
import { useContacts } from 'components/hooks/useContacts';
import { memo } from 'react';

function ContactItem({ name, number, id }) {
  const { deleteContact } = useContacts();

  function removeContact() {
    deleteContact(id);
    Notify.info(`${name} has been deleted`);
  }

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <BtnDelete type="button" onClick={() => removeContact(id)}>
        <RiDeleteBinLine />
      </BtnDelete>
    </Item>
  );
}

export default memo(ContactItem);

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  removeContact: PropTypes.func,
};
