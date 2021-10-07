import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonInitialState = {
  name: '',
  height: 0,
  types: [],
  imgSrc: null,
  abilities: [],
  moves: [],
};

const usePokemanData = (id) => {
  const [pokeman, setPokeman] = useState(pokemonInitialState);
  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await axios.get(`${url}${id}`);
        const data = response.data;

        const { name, height, sprites, types, abilities, moves } = data;
        const { other } = sprites;
        const { dream_world } = other;
        const { front_default: imgSrc } = dream_world;
        const specialMoves = moves.slice(0, 2);
        const slicedAbilities = abilities.slice(0, 2);

        setPokeman({
          name: name,
          height: height,
          imgSrc: imgSrc,
          types: types,
          abilities: slicedAbilities,
          moves: specialMoves,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getPokemonData();
  }, [id]);
  return pokeman;
};

export default usePokemanData;
