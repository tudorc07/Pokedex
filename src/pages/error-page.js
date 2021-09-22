import { CgPokemon } from 'react-icons/cg';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-whiteSecondary font-architect text-2xl md:text-5xl">
      <div className="animate-float flex items-center">
        <span>Error: Page not found!</span>
        <CgPokemon className="text-red ml-3 text-4xl md:text-6xl" />
      </div>
    </div>
  );
};

export default ErrorPage;
