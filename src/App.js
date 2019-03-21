/* eslint-disable object-curly-newline */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className='App'>
      <header className='App-header'>
        <Link to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </Link>
      </header>
      <Switch>
        <Route exact path='/' component={MoviesList} />
        <Route path='/:id' component={MovieDetail} />
      </Switch>
      <StyledFooter>
        Built by
        <a href='https://austintrandolph.herokuapp.com'> Austin Randolph </a>
        following
        <a href='https://www.leveluptutorials.com/tutorials/react-16-for-everyone/'>
          React for Everyone on LevelUp Tutorials
        </a>
      </StyledFooter>
    </div>
  </Router>
);

export default App;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 35%;
  height: 5%;
`;
