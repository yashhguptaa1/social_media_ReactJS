import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//import jwtDecode from 'jwt-decode';
// Components
import Navbar from './components/layout/Navbar';
import AuthRoute from './util/AuthRoute';

// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

import axios from 'axios';

axios.defaults.baseURL =
  'http://localhost:8080/';

/*
IF jwt token was being used
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}
*/

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
     );
  }
}
 
export default App;