import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'display',
  initialState: { value: false, searchTerm: '' },
  reducers: {
    open: (state, actions) => {
      state.value = actions.payload;
    },
    search: (state, actions) => {
      state.searchTerm = actions.payload;
    },
  },
});
export const { open, search } = displaySlice.actions;
export default displaySlice.reducer;
