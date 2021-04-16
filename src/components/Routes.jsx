import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import Layout from './Layout';
import Home from './Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LoginForm} />
      <Layout>
        <Route path="/users" component={UsersTable} />
        <Route path="/user/:id" component={UserForm} />
        <Route path="/home" component={Home} />
      </Layout>
    </Switch>
  </Router>
);

export default Routes;
