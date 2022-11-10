import PropTypes from 'prop-types';
import {
  Item,
  Text,
  BtnDelete,
  DeleteSvg,
  EditSvg,
} from './ContactItem.styled';
import { Notify } from 'notiflix';
import { memo } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import useToggle from 'components/hooks/useToggle';
import ChangeContact from 'components/ChangeContact/ChangeContact';
import { InfinitySpin } from 'react-loader-spinner';

function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { isOpen, setIsOpen, toggle } = useToggle();

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
        <ChangeContact
          id={id}
          nameContact={name}
          numberContact={number}
          isOpen={setIsOpen}
          toggle={toggle}
          setIsOpen={setIsOpen}
        />
      )}
      <Item>
        <Text>
          {name}: {number}
        </Text>
        {isLoading ? (
          <InfinitySpin color="black" width="100" />
        ) : (
          <div>
            <BtnDelete type="button" onClick={() => toggle()}>
              <EditSvg />
            </BtnDelete>
            <BtnDelete type="button" onClick={() => removeContact(id)}>
              <DeleteSvg />
            </BtnDelete>
          </div>
        )}
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
