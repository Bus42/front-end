import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import './App.css';

import Login from './components/Login'
import Signup from './components/Signup'
import Welcome from './components/Welcome'
import MyItems  from './components/MyItems'
import NewItem  from './components/NewItem'
import NewReview from './components/NewReview'
import Profile from './components/Profile'





function App() {

  // default variables
  const defaultUser = {
    username: '',
    email: '',
    rating: [],
  } 

  return (
    <Router>
      {/* header section */}
      <div>
        <Link to='/'>Home</Link>
        <Link to='/items'>My Items</Link>
        <Link to='/login'>Login</Link> 
        {/* once user loggedin login should link to /profile */}
        {/* <Link to='/profile/userId'>Login</Link>  */}
      </div>
      {/* main section */}
      <Switch>
        <Route path="/review">
          <NewReview />
        </Route>
        <Route path="/profile/:userid">
          <Profile />
        </Route>
        <Route path="/editProfile">
          <Signup />
        </Route>
        <Route path="/additem">
          <NewItem />
        </Route>
        <Route path="/items">
          <MyItems />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
