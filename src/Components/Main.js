import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from '../App'
import ContactMe from './ContactMe'


const Main = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path="/contact" component={ContactMe}/>
      </Switch>
    </Router>

  </div>
)

export default Main

