import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export function useContacts() {
  const { data: contacts, isLoading, isFetching } = useGetContactsQuery();

  return { contacts, isLoading, isFetching };
}
