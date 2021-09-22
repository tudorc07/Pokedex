import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemanTile = ({ name, url, id }) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const getPokemanImages = async () => {
      try {
        const response = await axios.get(url);
        const { sprites } = response.data;
        const { other } = sprites;
        const { dream_world } = other;
        const { front_default: imgSrc } = dream_world;

        setImgSrc(imgSrc);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemanImages();
  }, [url]);

  return (
    <li className="flex flex-col items-center bg-whiteSecondary mr-4 mb-4 mt-4 rounded-2xl relative font-architect p-2">
      <span className="absolute left-1 top-2 block bg-red text-whiteSecondary p-2 rounded-xl">
        No:{id}
      </span>

      <h1 className="capitalize">{name}</h1>

      <img src={imgSrc} alt={name} className=" w-52 h-52 mt-6" />

      <Link
        to={`/pokemon/${id}`}
        className="bg-red p-1 rounded-md mt-3 text-whiteSecondary"
      >
        More info
      </Link>
    </li>
  );
};

export default PokemanTile;
