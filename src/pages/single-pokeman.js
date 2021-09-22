import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PokemanInfo from '../components/single-pokeman/PokemanInfo';
import usePokemanData from '../hooks/use-pokeman-data';

const SinglePokeman = () => {
  const { id } = useParams();
  const { name, height, imgSrc, types, abilities, moves } = usePokemanData(id);

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
