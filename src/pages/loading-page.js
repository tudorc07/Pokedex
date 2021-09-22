import { CgPokemon } from 'react-icons/cg';

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-whiteSecondary font-architect text-2xl md:text-5xl">
      <div className="animate-float flex items-center">
        <span>Loading...</span>
        <CgPokemon className="text-red ml-3 text-4xl md:text-6xl" />
      </div>
    </div>
  );
};

export default Loading;
