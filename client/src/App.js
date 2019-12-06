import React from 'react';

import logo from './logo.svg';
import './App.scss';

import { Display } from './components/Display'
import { Navbar } from './components/Navbar'

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
          <Navbar />
          <h1 data-testid="main-title">Women's World Cup Data</h1>

          <div className="flexbox" data-testid="boxforapiDate">
            <Display stateProps={this.state} />
          </div>
        </header>
      </div>
      </>
    );
  }
}

export default App;
