import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemon-slice';
import singlePokemanListReducer from './slices/single-pokeman-list-slice.js';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    singlePokemanList: singlePokemanListReducer,
  },
});
