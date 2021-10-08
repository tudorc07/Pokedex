import { CgPokemon } from 'react-icons/cg';
import { StyledDiv } from './../pages/styles/loadinPageStyles';
const Loading = () => {
  return (
    <StyledDiv>
      <div>
        <span>Loading...</span>
        <CgPokemon />
      </div>
    </StyledDiv>
  );
};

export default Loading;
