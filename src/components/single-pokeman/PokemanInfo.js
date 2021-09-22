const PokemanInfo = ({ name, height, types, abilities, moves }) => {
  return (
    <>
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
        Types:{' '}
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
        <span>Special moves: </span>

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
    </>
  );
};

export default PokemanInfo;
