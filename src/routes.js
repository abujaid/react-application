import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/admin/dashboard';
import Add from './components/admin/products/add';
import Products from './components/admin/products/products';
import PrivateRoute from './components/private-route/private-route';

const routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/add-product" component={Add} />
      <PrivateRoute path="/products" component={Products} />
    </Switch>
  );
};

export default routes;
