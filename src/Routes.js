import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './utils/isAuthenticated';
import Home from './views/Home';
import Post from './views/Post';
import Login from './views/Login';
import Singup from './views/Signup';
import Create from './views/Create';

function Logout() {
  localStorage.removeItem('blogToken');
  return <Redirect to = '/login' />
}

const SecureLogout = isAuthenticated(Logout);

function Routes() {
  return (
    <>
      <Route exact path='/' component={Home}/>
      <Route exact path='/post/:id' component={Post} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Singup} />
      <Route exact path='/logout' component={SecureLogout} />
      <Route exact path='/create' component={Create} />
    </>
  )
}

export default Routes;
