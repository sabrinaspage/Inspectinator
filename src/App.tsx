import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import SignInPage from './components/SignInPage/SignInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element = {<Index/>} />
          <Route path="/signIn" element = {<SignInPage/>} />
          <Route path="/signUp" element = {<SignUpPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function Index() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}