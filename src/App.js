import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Security from './containers/Security';
import Login from './containers/LoginContainer';
import Logon from './containers/RegisterContainer';
import Logout from './containers/Logout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logon">
          <Logon />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <Security />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
