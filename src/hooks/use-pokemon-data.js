import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { populatePokemonArray } from './../store/slices/pokemon-slice';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=148';

const usePokemonData = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(url);
        const { results } = response.data;
        console.log(results);
        dispatch(populatePokemonArray(results));
        console.log('fetch');
      } catch (error) {
        console.log(error);
      }
    };

    if (pokemon.length) {
      return;
    }
    getPokemon();
  }, [dispatch, pokemon]);
  return { pokemon };
};

export default usePokemonData;
