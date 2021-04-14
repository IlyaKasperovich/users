import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import LoginForm from "./LoginForm"
import UserForm from "./UserForm"
import UsersTable from './UsersTable'


const App = () => {
  return (
    <Router>
      <div><Link to={'/login'}>Login</Link></div>
      <div><Link to={'/user'}>User</Link></div>
      <div><Link to={'/users'}>Users</Link></div>
      <Switch>
        <Route path='/' exact render={() => <Redirect to={'/login'}/>}/>
        <Route path='/login' component={LoginForm}/>
        <Route path='/users' component={UsersTable}/>
        <Route path='/user' component={UserForm}/>
      </Switch>
    </Router>
  )
}

export default App