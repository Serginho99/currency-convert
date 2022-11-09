import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Item, Text, BtnDelete } from './ContactItem.styled';
import { Notify } from 'notiflix';
import { memo } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Link } from 'react-router-dom';
import useToggle from 'components/hooks/useToggle';
import ChangeContact from 'components/ChangeContact/ChangeContact';

function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // const { contactId } = useParams();
  const { isOpen, toggle } = useToggle();
  console.log(isOpen);

  async function removeContact() {
    try {
      await deleteContact(id);
      Notify.info(`${name} has been deleted`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isOpen && (
        <ChangeContact id={id} nameContact={name} numberContact={number} />
      )}
      <Item>
        <Text>
          {name}: {number}
        </Text>
        <Link to={`contacts/${id}`} onClick={() => toggle()}>
          change
        </Link>
        <BtnDelete type="button" onClick={() => removeContact(id)}>
          {isLoading ? 'remove' : <RiDeleteBinLine />}
        </BtnDelete>
      </Item>
    </>
  );
}

export default memo(ContactItem);

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  removeContact: PropTypes.func,
};
