import React from 'react'
import { Navbar } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Cryptocurrencies, News } from './pages';
import { CssBaseline } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <Navbar />
      <CssBaseline />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/cryptocurrencies'>
          <Cryptocurrencies />
        </Route>
        <Route exact path='/news'>
          <News />
        </Route>
      </Switch>
    </Router>
  )
}

export default App