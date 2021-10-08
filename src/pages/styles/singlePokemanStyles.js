import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #ec5859;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const StyledMain = styled.main`
  background-color: #eee;
  border-radius: 1rem;
  height: auto;
  width: 83.333333%;
  padding: 6rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 58.333333%;
    padding: 6rem 3rem;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const singlePokemanImageStyles = css`
  display: block;
  margin-bottom: 2.5rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const linkStyles = css`
  background-color: #ec5859;
  text-align: center;
  border-radius: 0.375rem;
  text-transform: capitalize;
  width: 100%;
  display: block;
  cursor: pointer;
  color: #eee;
  text-decoration: none;
  margin-top: 24px;
`;
