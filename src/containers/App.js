import React, { Component } from 'react';
import './App.css';
import FactButton from '../components/FactButton';
import RelevantGif from '../components/RelevantGif';

const state = {}

class App extends Component {
  constructor(){
    super()
    this.state = {
      joke: '',
      gifNumber: null
    }
  }

  componentDidMount(){
    let rando = Math.floor(Math.random() * 10) + 1;
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(fact => this.setState({ fact: fact.value, gifNumber: rando }))
  }

  fetchFact = () => {
    let rando = Math.floor(Math.random() * 10) + 1;
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(fact => this.setState({ fact: fact.value, gifNumber: rando }))
  }

  render(){
    const { fact, gifNumber } = this.state;
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div style={{alignItems:'center', 'width':'600px'}}>
          <h1 style={{textAlign:'center'}}>CHUCKINATOR!</h1>
          <h2 style={{textAlign:'center'}}>The definitive source of all Chuck Norris facts</h2>
          <p style={{textAlign:'center', fontSize:"24px"}}>{fact}</p>
          <FactButton fetchFact={this.fetchFact} />
          <RelevantGif gifNumber={gifNumber} />
        </div>
      </div>
    )
  }

}

export default App;
