import React from 'react'
import Home from './Home'
import Profile from './Profile'
import About from './About'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <h2>Welcome to my page</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <div>
            <h2>404 Not Found.</h2>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

App.propTypes = {}

export default App
