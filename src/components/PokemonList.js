import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokeman from './Pokeman';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=148'
        );
        const { results } = response.data;
        console.log(results);

        setPokemon(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, []);

  return (
    <main className="min-h-screen bg-red ">
      <div className="container mx-auto">
        <ul
          className="flex flex-row  flex-wrap justify-center"
          id="pokemon-list"
        >
          {pokemon.map(({ name, url }, index) => (
            <Pokeman key={index} index={index} name={name} url={url} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PokemonList;
