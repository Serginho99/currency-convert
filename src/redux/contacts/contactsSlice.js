// import { nanoid } from 'nanoid';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63565a17a2d1844a9772961c.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: contact => ({
        url: 'contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;

// const initialContacts = {
//   contactsItem: [
//     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//     { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//     { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialContacts,
//   reducers: {
//     addContacts: {
//       reducer(state, { payload }) {
//         const newContact = [payload, ...state.contactsItem];
//         return { ...state, contactsItem: newContact };
//         //  state.contactsItem.push(payload);
//       },
//       prepare(data) {
//         return {
//           payload: {
//             ...data,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     removeContact: (state, { payload }) => {
//       return {
//         contactsItem: state.contactsItem.filter(({ id }) => id !== payload),
//       };
//     },
//   },
// });

// export default contactsSlice.reducer;
// export const { addContacts, removeContact } = contactsSlice.actions;
