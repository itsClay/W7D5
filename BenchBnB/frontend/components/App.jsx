import React from 'react';
import GreetingContainer from './greeting_container.js';
import SessionFormContainer from './session_form_container';
import { Route } from 'react-router';
import AuthRoute from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1> Bench BnB </h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
