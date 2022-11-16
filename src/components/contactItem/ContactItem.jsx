import PropTypes from 'prop-types';
import {
  Item,
  Text,
  BtnDelete,
  DeleteSvg,
  EditSvg,
  Box,
} from './ContactItem.styled';
import { Notify } from 'notiflix';
import { memo } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import useToggle from 'components/hooks/useToggle';
import ChangeContact from 'components/ChangeContact/ChangeContact';
import { InfinitySpin } from 'react-loader-spinner';
import BasicAvatar from 'components/BasicAvatar/BasicAvatar';
import AlertDialogSlide from 'components/Confirm/Confirm';

function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { isOpen, setIsOpen, toggle, isConfirm, setIsConfirm, toggleConfirm } =
    useToggle();

  async function removeContact() {
    setIsConfirm(false);
    try {
      await deleteContact(id);
      Notify.info(`${name} has been deleted`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Item>
        <BasicAvatar
          name={name}
          alt={name}
          src="/static/images/avatar/2.jpg"
          sx={{ width: 50, height: 50 }}
        />
        <Text>
          {name}: <a href={`tel:${number}`}>{number}</a>
        </Text>
        <div>
          {isOpen && (
            <ChangeContact
              id={id}
              nameContact={name}
              numberContact={number}
              open={isOpen}
              toggle={toggle}
              setIsOpen={setIsOpen}
            />
          )}
        </div>
        {isLoading ? (
          <Box>
            <InfinitySpin width="100" color="black" />
          </Box>
        ) : (
          <Box>
            <BtnDelete type="button" onClick={() => toggle()}>
              <EditSvg />
            </BtnDelete>
            <BtnDelete type="button" onClick={() => toggleConfirm()}>
              <DeleteSvg />
            </BtnDelete>
          </Box>
        )}
        {isConfirm && (
          <AlertDialogSlide
            open={isConfirm}
            removeContact={() => removeContact(id)}
            setOpen={setIsConfirm}
            id={id}
            nameContact={name}
            title="Are you sure?"
          />
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
