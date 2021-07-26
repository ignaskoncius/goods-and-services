import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allData: [] };
  }
  state = {};
  render() {
    return (
      <div className="App">
        <MyForm></MyForm>
      </div>
    );
  }
}

export default App;
