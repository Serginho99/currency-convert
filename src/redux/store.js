import { configureStore } from '@reduxjs/toolkit';
import {
  // persistorContactsReducer,
  persistorFilterReducer,
  persistorAuthReducer,
} from './persist/persistReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from './contacts/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    auth: persistorAuthReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: persistorFilterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
