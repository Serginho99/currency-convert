import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: 'contacts',
        method: 'GET',
      }),
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: contact => ({
        url: 'contacts',
        method: 'POST',
        data: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contact => ({
        url: `contacts/${contact}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContact: builder.mutation({
      query: contact => ({
        url: `contacts/${contact}`,
        method: 'PATCH',
        data: contact.values,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useUpdateContactMutation,
} = contactsApi;
