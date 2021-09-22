import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemanTile = ({ name, url, id }) => {
  const [abilities, setAbilities] = useState([]);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const getPokemanAbilities = async () => {
      try {
        const response = await axios.get(url);
        const { abilities, sprites } = response.data;
        console.log(abilities);
        const { other } = sprites;
        const { dream_world } = other;
        const { front_default: imgSrc } = dream_world;

        setImgSrc(imgSrc);

        setAbilities(abilities);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemanAbilities();
  }, [url]);

  return (
    <li className="flex flex-col items-center bg-whiteSecondary mr-4 mb-4 mt-4 rounded-2xl relative font-architect p-2">
      <span className="absolute left-1 top-2 block bg-red text-whiteSecondary p-2 rounded-xl">
        No:{id}
      </span>

      <h1 className="capitalize">{name}</h1>

      <img src={imgSrc} alt={name} className=" w-52 h-52 mt-6" />
      <ul>
        <h1 className="text-center capitalize">Abilities</h1>
        {abilities.map(({ ability }, index) => {
          const { name: abilityName } = ability;

          return (
            <li
              className="bg-red my-2 text-center p-1 rounded-xl capitalize"
              key={index}
            >
              {abilityName}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default PokemanTile;
