import { Container } from './styles';

const PokemanInfo = ({ name, height, types, abilities, moves }) => {
  return (
    <Container>
      <p>
        Name:{' '}
        <span className="capitalize ml-2 text-whiteSecondary bg-red rounded-md p-0.5">
          {name}
        </span>
      </p>

      <p className="mt-4">
        Height:{' '}
        <span className="ml-2 text-whiteSecondary bg-red rounded-md p-2">
          {height}
        </span>
      </p>

      <p className="mt-4">
        Type:{' '}
        {types.map(({ type }, index) => {
          return (
            <span
              key={index}
              className="capitalize  ml-2 text-whiteSecondary bg-red rounded-md p-0.5"
            >
              {type.name}
            </span>
          );
        })}
      </p>

      <p className="mt-2">
        Abilities:{' '}
        {abilities.map(({ ability }, index) => {
          return (
            <span
              key={index}
              className="capitalize ml-2 text-whiteSecondary bg-red rounded-md p-0.5"
            >
              {ability.name}
            </span>
          );
        })}
      </p>

      <p className="mt-2">
        Special moves:
        {moves.map(({ move }, index) => {
          return (
            <span
              key={index}
              className="capitalize inline-block ml-2 text-whiteSecondary bg-red rounded-md p-0.5"
            >
              {move.name}
            </span>
          );
        })}
      </p>
    </Container>
  );
};

export default PokemanInfo;
