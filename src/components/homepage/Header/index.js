import Typical from 'react-typical';
import { SiPokemon } from 'react-icons/si';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PokeballImage from './pokeball.png';
import { Link } from 'react-scroll';
import {
  Container,
  flexCenter,
  H1,
  headerStyles,
  linkStyles,
  pokeballStyles,
  typicalStyles,
} from './styles';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

const Header = () => {
  const typicalText = [
    'Welcome to Pokedex!',
    1000,
    `Let's checkout some Pokemon!`,
    1000,
  ];

  return (
    <header id="header" css={headerStyles}>
      <Container>
        <div css={flexCenter}>
          <H1>
            <SiPokemon style={{ fontSize: '8rem' }} />
          </H1>
          <Typical steps={typicalText} loop={Infinity} css={typicalStyles} />
        </div>

        <LazyLoadImage
          src={PokeballImage}
          effect="blur"
          css={pokeballStyles}
          placeholderSrc="pokeball"
        />
      </Container>

      <Link smooth={true} to="pokemon-list" css={linkStyles}>
        discover more
      </Link>
    </header>
  );
};

export default Header;
