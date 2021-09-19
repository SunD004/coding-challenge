import React from 'react'

import { Provider } from 'react-redux'

import Beers from './Views/Beers';
import Beer from './Views/Beer';
import store from './app/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Beers} />
          <Route exact path="/beer/:name" component={Beer} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
