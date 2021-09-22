import Homepage from './pages/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import SinglePokeman from './pages/single-pokeman';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/pokemon/:id" component={SinglePokeman} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
