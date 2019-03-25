import React, { Component } from 'react';
import './App.css';

// REDUX
import { Provider } from "react-redux";
import store from './store';

// HOC
import Layout from './hoc/Layout'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
