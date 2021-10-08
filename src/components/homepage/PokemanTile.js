import { Link } from 'react-router-dom';
import { badgeStyles, pokemanImageStyles, pokemonTileStyles } from './styles';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { linkStyles } from './styles';

const PokemanTile = ({ name, id }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  return (
    <li css={pokemonTileStyles}>
      <span css={badgeStyles}>No:{id}</span>

      <h1 style={{ textTransform: 'capitalize', fontSize: '16px' }}>{name}</h1>

      <img src={imgSrc} alt={name} css={pokemanImageStyles} />

      <Link to={`/pokemon/${id}`} css={linkStyles}>
        More info
      </Link>
    </li>
  );
};

export default PokemanTile;
