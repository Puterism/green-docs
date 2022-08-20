import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/tab" />
        </Route>
        <>
          <Route exact path="/tab" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </>
      </Switch>
    </HashRouter>
  );
};

export default App;
