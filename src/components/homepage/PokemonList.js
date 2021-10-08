import PokemanTile from './PokemanTile';
import usePokemonData from './../../hooks/use-pokemon-data';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Container } from './styles';
import { mainStyles, pokemonListStyles } from './styles';

const PokemonList = () => {
  const { pokemon } = usePokemonData();
  return (
    <main css={mainStyles} id="pokemon-list">
      {' '}
      <Container>
        <ul css={pokemonListStyles} style={{ padding: '0' }}>
          {pokemon.map(({ name, url }, index) => (
            <PokemanTile key={index} id={index + 1} name={name} url={url} />
          ))}
        </ul>
      </Container>
    </main>
  );
};

export default PokemonList;
