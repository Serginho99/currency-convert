import storage from 'redux-persist/lib/storage';

// export const persistContactsConfig = {
//   key: 'contacts',
//   storage,
// };

export const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistFilterConfig = {
  key: 'filter',
  storage,
};
