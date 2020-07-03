import React, { useState, useEffect } from 'react';
import './App.css';

import { Route, Switch, useHistory} from 'react-router';

import Dashboard from './components/dashboard';
import Favorites from './components/favorites';
import Login from './components/login';

import ls from 'local-storage';

function App() {

  const { push } = useHistory();

  useEffect(() => {
    if(ls.get('user')){
      push("/dashboard");
    }   
  }, []);

  return (
    <div className="App" style={{background: "#EFE9F4", overflow: "hidden", maxWidth: "100vw"}}>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
