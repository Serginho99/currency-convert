import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContactItem,
  removeContact,
} from './contactsOperation';
import { nanoid } from 'nanoid';

const initialState = {
  contactsItem: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending]: state => (state.isLoading = true),
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contactsItem = payload;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addContactItem.pending]: state => (state.isLoading = true),
    [addContactItem.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contactsItem.push(payload);
    },
    [addContactItem.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [removeContact.pending]: state => (state.isLoading = true),
    [removeContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contactsItem = state.contactsItem.filter(
        ({ id }) => id !== payload
      );
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;

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
