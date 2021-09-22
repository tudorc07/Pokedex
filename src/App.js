import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import { Suspense, lazy } from 'react';
import Loading from './pages/loading-page';

const Homepage = lazy(() => import('./pages/homepage'));
const SinglePokeman = lazy(() => import('./pages/single-pokeman'));

const App = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/pokemon/:id" component={SinglePokeman} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
