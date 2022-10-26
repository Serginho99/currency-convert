import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export function useContacts() {
  const { data: contacts, isLoading, isFetching } = useGetContactsQuery();

  return { contacts, isLoading, isFetching };
}
