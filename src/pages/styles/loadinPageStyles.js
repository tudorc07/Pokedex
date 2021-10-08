import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  font-size: 1.5rem;

  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
