import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const headerStyles = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  margin: 0;
`;

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    max-width: 640px;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
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
  }
`;

export const flexCenter = css`
  display: flex;
  flex-direction: column;
`;

export const typicalStyles = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

export const pokeballStyles = css`
  width: 24rem;
  @media (min-width: 768px) {
    margin-top: 2.5rem;
  }
`;
export const H1 = styled.h1`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const float = keyframes`
0% {
transform: translateY(0px)
}

50%{
  transform:translateY(-20px)
}

100% { 
transform: translateY(0px)
}
`;

export const linkStyles = css`
  background-color: #ec5859;
  text-align: center;
  border-radius: 0.375rem;
  width: 10rem;
  text-transform: capitalize;
  cursor: pointer;
  padding: 0.75rem;
  animation: ${float} 3s infinite;

  @media (min-width: 768px) {
    width: 13rem;
  }
`;
