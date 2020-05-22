import React from 'react';
import './App.css';
import SignUp from './Container/SignUp';
import Login from './Container/Login';
import MainPage from './Container/MainPage';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return ( 
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/MainPage" exact component={MainPage}/>
        </Switch>
     );
  }
}

export default App;
