import { Link } from 'react-router-dom';

const PokemanTile = ({ name, id }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
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
