import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const usePokemanData = (id) => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
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

        setName(name);
        setHeight(height);
        setImgSrc(imgSrc);
        setTypes(types);
        setAbilities(slicedAbilities);
        setMoves(specialMoves);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemonData();
  }, [id]);
  return { name, height, imgSrc, types, abilities, moves };
};

export default usePokemanData;
