import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const mainStyles = css`
  min-height: 100vh;
  background-color: #ec5859;
  width: 100%;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;

  /* @media (min-width: 640px) {
    max-width: 640px;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding: 4rem;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 5rem;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
    padding: 6rem;
  } */
`;

export const pokemonListStyles = css`
  display: grid;
  grid-gap: 1rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const pokemonTileStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 1rem;
  background-color: #eee;
`;

export const badgeStyles = css`
  position: absolute;
  display: block;
  color: #eee;
  padding: 0.5rem;
  background-color: #ec5859;
  top: 0.5rem;
  left: 0.25rem;
  border-radius: 0.75rem;
`;

export const pokemanImageStyles = css`
  width: 10rem;
  height: 13rem;
  margin-top: 1.5rem;
  color: #eee;
`;

export const linkStyles = css`
  background-color: #ec5859;
  color: #eee;
  margin-top: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
  text-decoration: none;
`;
