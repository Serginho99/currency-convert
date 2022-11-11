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

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
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
        <BasicAvatar
          name={name}
          alt={name}
          src="/static/images/avatar/2.jpg"
          sx={{ width: 56, height: 56 }}
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
