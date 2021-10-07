import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addPokemanToList } from '../store/slices/single-pokeman-list-slice.js';

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
  const singlePokemanList = useSelector((state) => state.singlePokemanList);
  const dispatch = useDispatch();
  const pokemanFromList = singlePokemanList.find(
    (pokeman) => pokeman.id === id
  );

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
        console.log('fetchh2');
        const newPokeman = {
          id: id,
          name: name,
          height: height,
          imgSrc: imgSrc,
          types: types,
          abilities: slicedAbilities,
          moves: specialMoves,
        };
        setPokeman(newPokeman);

        dispatch(addPokemanToList(newPokeman));
      } catch (error) {
        console.log(error);
      }
    };

    if (pokemanFromList !== undefined) {
      setPokeman(pokemanFromList);
      return;
    }

    getPokemonData();
  }, [id, dispatch, pokemanFromList]);
  return pokeman;
};

export default usePokemanData;
