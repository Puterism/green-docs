import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/tab" />
        </Route>

        <Route exact path="/tab" component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default App;
