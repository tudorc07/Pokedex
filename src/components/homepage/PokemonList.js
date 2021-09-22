import PokemanTile from './PokemanTile';
import usePokemonData from './../../hooks/use-pokemon-data';

const PokemonList = () => {
  const { pokemon } = usePokemonData();
  return (
    <main className="min-h-screen bg-red ">
      <div className="container mx-auto">
        <ul
          className="flex flex-row  flex-wrap justify-center"
          id="pokemon-list"
        >
          {pokemon.map(({ name, url }, index) => (
            <PokemanTile key={index} id={index + 1} name={name} url={url} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PokemonList;
