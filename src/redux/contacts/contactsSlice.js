import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = {
  contactsItem: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContacts: {
      reducer(state, { payload }) {
        const newContact = [payload, ...state.contactsItem];
        return { ...state, contactsItem: newContact };
        //  state.contactsItem.push(payload);
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: (state, { payload }) => {
      return {
        contactsItem: state.contactsItem.filter(({ id }) => id !== payload),
      };
    },
  },
});

export default contactsSlice.reducer;
export const { addContacts, removeContact } = contactsSlice.actions;
