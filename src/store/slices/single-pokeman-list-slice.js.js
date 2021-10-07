import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const singlePokemanListSlice = createSlice({
  name: 'singlePokemanList',
  initialState,
  reducers: {
    addPokemanToList: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPokemanToList } = singlePokemanListSlice.actions;

export default singlePokemanListSlice.reducer;
