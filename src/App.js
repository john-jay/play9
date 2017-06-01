import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'

const Stars = (props) => {
    var numberOfStars = Math.floor(Math.random()*9) + 1;

    return (
        <div className="col-sm-5">
          {_.range(numberOfStars).map(i => 
            <i key={i} className="fa fa-star"></i>
          )}
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

const Answer = (props) => {
    return (
      <div className="col-sm-5">
        {props.selectedNumbers.map((number, i) =>
          <span key={i}>{number}</span>
        )}
      </div>
    );
};

const Numbers = (props) => {
    const numberClassName = (number) => {
      if (props.selectedNumbers.indexOf(number) >= 0)
        return 'selected';
    }
    return (
      <div className="card text-center">
        <div>
          {Numbers.list.map((number, i) =>
            <span key={i} className={numberClassName(number)}
                  onClick={()=> props.selectNumber(number)}>
              {number}
            </span>
          )}
        </div>
      </div>
    );
};

Numbers.list = _.range(1,10);

class Game extends React.Component {
  state = {
    selectedNumbers:[]
  };
  selectNumber = (clickedNumber) =>
  {
    if (this.state.selectedNumbers.indexOf(clickedNumber) == -1){
      this.setState(prevState => ({
        selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
      }));
    }
  }
  render(){
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers} />
        </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers} 
            selectNumber={this.selectNumber} />
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
