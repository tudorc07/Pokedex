import { css } from '@emotion/react';

export const scrollToTopStyles = css`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 0.75rem;
  color: #eee;

  @media (min-width: 768px) {
    right: 6rem;
    width: 10rem;
  }
`;
