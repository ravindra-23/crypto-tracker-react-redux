import React from 'react'
import { Navbar } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, CryptocurrenciesPage, News } from './pages';
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
        <Route path='/cryptocurrencies'>
          <CryptocurrenciesPage />
        </Route>
        <Route path='/news'>
          <News />
        </Route>
      </Switch>
    </Router>
  )
}

export default App