import React from 'react'
import { Navbar } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeInfo, Cryptocurrencies, News, Cryptodetails } from './components';
// import { Home, CryptocurrenciesPage, NewsPage } from './pages';
import { CssBaseline } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <Navbar />
      <CssBaseline />
      <Switch>
        <Route exact path='/'>
          <HomeInfo />
        </Route>
        <Route path='/cryptocurrencies'>
          <Cryptocurrencies />
        </Route>
        <Route path='/news'>
          <News simplified={false} />
        </Route>
        <Route path="/crypto/:coinId">
              <Cryptodetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default App