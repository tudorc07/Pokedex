import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PokemanInfo from '../components/single-pokeman/PokemanInfo';
const url = 'https://pokeapi.co/api/v2/pokemon/';

const SinglePokeman = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);

  const { id } = useParams();

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
  return (
    <div className="min-h-screen bg-red flex justify-center items-center font-architect">
      <main className="bg-whiteSecondary rounded-2xl h-auto w-10/12 md:w-7/12 py-24 px-2 md:px-12  flex flex-col justify-center md:flex-row md:justify-around">
        <LazyLoadImage
          effect="blur"
          src={imgSrc}
          className="block mb-10 md:mb-0 mx-auto"
        />

        <div className="text-sm md:text-lg">
          <PokemanInfo
            name={name}
            height={height}
            types={types}
            abilities={abilities}
            moves={moves}
          />
          <Link
            to="/"
            className="text-whiteSecondary block mt-12 text-center bg-red rounded-xl p-1 animate-float"
          >
            Back home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SinglePokeman;
