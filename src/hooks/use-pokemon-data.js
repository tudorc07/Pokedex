import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=148';

const usePokemonData = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(url);
        const { results } = response.data;

        setPokemon(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, []);
  return { pokemon };
};

export default usePokemonData;
