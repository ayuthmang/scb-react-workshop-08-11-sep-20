import React from 'react'
import Home from './Home'
import Profile from './Profile'
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <h2>HELLO WORLD</h2>
        <Home />
        <Profile />
        <About />
      </div>

      <Switch>
        <Route to="/about" component={About} />
        {/* TBC */}
      </Switch>
    </Router>
  )
}

App.propTypes = {}

export default App
