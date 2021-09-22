import PokemonList from '../components/homepage/PokemonList';
import Header from '../components/homepage/Header/index';
import ScrollToTop from '../components/ScrollToTop';
const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <PokemonList />
      <ScrollToTop />
    </div>
  );
};

export default Homepage;
