import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginForm from './LoginForm';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import Layout from './Layout';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LoginForm} />
      <Layout>
        <Route path="/users" component={UsersTable} />
        <Route path="/user" component={UserForm} />
      </Layout>
    </Switch>
  </Router>
);

export default App;
