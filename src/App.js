import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import FunctionalMyName from "./FunctionalMyName";
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MyName name="Moreal" />
        <MyName />
        <FunctionalMyName name="Functonal LEE" />
        <Counter />
      </Fragment>
    );
  }
}

export default App;
