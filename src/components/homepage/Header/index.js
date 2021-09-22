import Typical from 'react-typical';
import { SiPokemon } from 'react-icons/si';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PokeballImage from './pokeball.png';
import { Link } from 'react-scroll';

const Header = () => {
  const typicalText = [
    'Welcome to Pokedex!',
    1000,
    `Let' checkout some Pokemon!`,
    1000,
  ];

  return (
    <header
      id="header"
      className="min-h-screen font-architect flex flex-col items-center justify-center bg-whiteSecondary text-white"
    >
      <div className="container mx-auto px-4 md:px-0 flex justify-center items-center md:justify-between flex-col md:flex-row">
        <div className="flex-col flex">
          <h1 className="mx-auto md:mx-0">
            <SiPokemon className="text-9xl" />
          </h1>

          <Typical
            steps={typicalText}
            loop={Infinity}
            className="text-xl md:text-3xl mx-auto md:mx-0 fill-current "
          />
        </div>

        <LazyLoadImage
          src={PokeballImage}
          effect="blur"
          className="md:mt-10 w-96"
          placeholderSrc="pokeball"
        />
      </div>

      <Link
        smooth={true}
        to="pokemon-list"
        className="bg-red rounded-md text-center p-3 w-40 md:w-52 capitalize animate-float cursor-pointer "
      >
        discover more
      </Link>
    </header>
  );
};

export default Header;
