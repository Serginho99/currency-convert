import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as API from 'components/services/userApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await API.signUp(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await API.logIn(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await API.logOut();
      token.unSet();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const data = API.fetchCurrentUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authOperations = { register, logIn, logOut, currentUser };

export default authOperations;
