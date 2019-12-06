import React from 'react';

import logo from './logo.svg';
import './App.css';

import { Display } from './components/Display'

//function App() {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchmeData: []
    };
  }

  componentDidMount() {
    const apiCall = () => {
      fetch('http://localhost:5000/api/players')
        .then(response => response.json())
        .then(fetchmeData => this.setState({fetchmeData: fetchmeData}))
        .catch(err => console.log('noooo'));
    };
    apiCall();
  }

  render() {
    return (
      <>
      {}
      {console.log(this.state.fetchmeData)}

      <div className="App">
        <header className="App-header">
          <Display stateProps={this.state} />
        </header>
      </div>
      </>
    );
  }
}

export default App;
