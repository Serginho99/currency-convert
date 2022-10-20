import { useSelector, useDispatch } from 'react-redux';
import { addContacts, removeContact } from 'redux/contacts/contactsSlice';

export function useContacts() {
  const contacts = useSelector(state => state.contacts.contactsItem);
  const dispatch = useDispatch();

  function addContact(contact) {
    dispatch(addContacts(contact));
  }

  function deleteContact(id) {
    dispatch(removeContact(id));
  }

  return { contacts, addContact, deleteContact };
}
