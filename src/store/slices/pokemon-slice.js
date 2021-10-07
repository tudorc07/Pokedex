const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    populatePokemonArray: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { populatePokemonArray } = pokemonSlice.actions;

export default pokemonSlice.reducer;
