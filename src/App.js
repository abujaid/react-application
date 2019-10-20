import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';
import Navegation from './components/navbar';
import store from './store/store';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logout } from './store/actions/authAction';
import { setAuthToken } from './utils/setAuthToken';

function App() {
  if (localStorage.jwtToken) {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);
    const decoded = jwt_decode(token); // get user information
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logout());
      // Redirect to login
      window.location.href = './login';
    }
  }
  return (
    <Router>
      <React.Fragment>
        <Navegation />
        <Route component={Routes} />
      </React.Fragment>
    </Router>
  );
}

export default App;
