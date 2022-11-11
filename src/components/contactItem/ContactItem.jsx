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
import Avatar from '@mui/material/Avatar';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

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
      <Item>
        <Avatar sx={{ bgcolor: getRandomHexColor }}>{name.slice(0, 1)}</Avatar>
        <Text>
          {name}: <a href={`tel:${number}`}>{number}</a>
        </Text>
        <div>
          {isOpen && (
            <ChangeContact
              id={id}
              nameContact={name}
              numberContact={number}
              isOpen={isOpen}
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
            <BtnDelete type="button" onClick={() => removeContact(id)}>
              <DeleteSvg />
            </BtnDelete>
          </Box>
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
