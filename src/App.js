import PokemonList from './components/PokemonList';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
const App = () => {
  return (
    <div className="App">
      <Header />
      <PokemonList />
      <ScrollToTop />
    </div>
  );
};

export default App;
