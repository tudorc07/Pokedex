import Homepage from './pages/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './pages/error-page';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
