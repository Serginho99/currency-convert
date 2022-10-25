import { persistFilterConfig } from './persistConfig';
// import contactsSlice from 'redux/contacts/contactsSlice';
import filterSlice from 'redux/filter/filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';

// export const persistorContactsReducer = persistReducer(
//   persistContactsConfig,
//   contactsSlice
// );

export const persistorFilterReducer = persistReducer(
  persistFilterConfig,
  filterSlice
);
