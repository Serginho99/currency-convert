import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Item, Text, BtnDelete } from './ContactItem.styled';
import { Notify } from 'notiflix';
import { memo } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  async function removeContact() {
    try {
      await deleteContact(id);
      Notify.info(`${name} has been deleted`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <BtnDelete type="button" onClick={() => removeContact(id)}>
        {isLoading ? 'remove' : <RiDeleteBinLine />}
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
