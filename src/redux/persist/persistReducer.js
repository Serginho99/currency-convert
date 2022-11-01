import { persistFilterConfig, persistAuthConfig } from './persistConfig';
// import contactsSlice from 'redux/contacts/contactsSlice';
import filterSlice from 'redux/filter/filterSlice';
import authSlice from 'redux/auth/authSlice';
import persistReducer from 'redux-persist/es/persistReducer';

// export const persistorContactsReducer = persistReducer(
//   persistContactsConfig,
//   contactsSlice
// );

export const persistorAuthReducer = persistReducer(
  persistAuthConfig,
  authSlice
);

export const persistorFilterReducer = persistReducer(
  persistFilterConfig,
  filterSlice
);
