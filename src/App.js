import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import _ from 'LoDash'

const Stars = (props) => {
    var numberOfStars = Math.floor(Math.random()*9) + 1;

    var stars = [];
    for (var i =0; i<numberOfStars; i++) {
      stars.push(
        <i key={i} className="fa fa-star"></i>
      );
    }

    return (
        <div className="col-sm-5">
          {stars}
        </div>
    );
};

const Button = (props) => {
    return (
      <div className="col-sm-2">
        <button>=</button>
      </div>
    );
};

const AnswerFrame = (props) => {
    return (
      <div className="col-sm-5">
        ...
      </div>
    );
};

const Numbers = (props) => {
    var numbers = [];
    for (var i=1; i <= 9; i++) {
      numbers.push(
        <span key={i}>{i}</span>
      );
    }
    return (
      <div className="card text-center">
        <div>
          {numbers}
        </div>
      </div>
    );
};

class Game extends React.Component {
  state = {
    selectedNumbers:[2, 4]
  };
  render(){
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <AnswerFrame selectedNumbers={this.state.selectedNumbers} />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
