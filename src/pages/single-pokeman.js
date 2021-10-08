import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PokemanInfo from '../components/single-pokeman/PokemanInfo';
import usePokemanData from '../hooks/use-pokeman-data';
import {
  Container,
  linkStyles,
  singlePokemanImageStyles,
  StyledMain,
} from './styles/singlePokemanStyles';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

const SinglePokeman = () => {
  const { id } = useParams();
  const { name, height, imgSrc, types, abilities, moves } = usePokemanData(id);

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <Container>
      <StyledMain>
        <LazyLoadImage
          effect="blur"
          src={imgSrc}
          css={singlePokemanImageStyles}
        />

        <div className="text-sm md:text-lg">
          <PokemanInfo
            name={name}
            height={height}
            types={types}
            abilities={abilities}
            moves={moves}
          />
          <Link to="/" css={linkStyles}>
            Back home
          </Link>
        </div>
      </StyledMain>
    </Container>
  );
};

export default SinglePokeman;
