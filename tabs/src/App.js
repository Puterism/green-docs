import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

import { initializeIcons, ThemeProvider } from '@fluentui/react';

const appTheme = {
  palette: {
    themePrimary: '#019e79',
  },
};

initializeIcons();

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
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
    </ThemeProvider>
  );
};

export default App;
