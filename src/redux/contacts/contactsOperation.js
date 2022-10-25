import * as api from '../../serviceApi/serviceApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.fetchContacts();
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const addContactItem = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.addContact(data);
      return res;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
