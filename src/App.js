import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import Podcasts from './pages/podcasts';
import NowLivePage from './pages/nowlive';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import logo from './2day.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <main>
            <header>
              <div className="heading">
                <div className="heading__logo">
                  <img src={logo} className="logo" alt="logo" />
                </div>
                <h1 className="heading__title">SCA Playground</h1>
              </div>
              <nav className="nav">
                <ul className="nav__list">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/podcasts">Podcasts</NavLink></li>
                  <li><NavLink to="/live">Live</NavLink></li>
                </ul>
              </nav>
            </header>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/podcasts" component={Podcasts}/>
              <Route path="/live" component={NowLivePage}/>
            </div>
          </main>
        </HashRouter>
      </div>
    );
  }
}

export default App;
