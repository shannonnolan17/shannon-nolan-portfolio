import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../App'
import ContactMe from './ContactMe'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/contact' component={ContactMe}/>
    </Switch>
  </main>
)

export default Main