import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from './pages/loading-page';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Homepage = lazy(() => import('./pages/homepage'));
const SinglePokeman = lazy(() => import('./pages/single-pokeman'));

const App = () => {
  return (
    <div className="App" style={{ fontFamily: 'Architects Daughter' }}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Provider store={store}>
              <Route exact path="/" component={Homepage} />
              <Route path="/pokemon/:id" component={SinglePokeman} />
            </Provider>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
