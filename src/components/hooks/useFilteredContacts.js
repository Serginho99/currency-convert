// import { useMemo } from 'react';
// import { useContacts } from './useContacts';
// import { useFilter } from './useFilter';

// export function useFilteredContacts() {
//   const { contacts } = useContacts();
//   const { filter } = useFilter();

//   const getVisibleContacts = useMemo(() => {
//     const normalizeFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//   }, [contacts, filter]);

//   return { getVisibleContacts };
// }
