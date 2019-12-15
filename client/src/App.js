import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import LandingPage from './pages/LandingPage.component';
import Nav from './Components/navigation/Nav.component';
import LoginAndSignup from './pages/LoginAndSignup.component';
import Cart from './Components/Cart/Cart.component';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/register" component={LoginAndSignup}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </div>
  );
}

export default App;
