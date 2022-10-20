import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter: (state, { payload }) => {
      return { ...state, value: payload };
    },
  },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
