import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render() {
    return(
      <div className="ui container">
        <div className="ui segment">
          <div data-test="component-app">
            <h1 className="ui header" data-test="title">Counter App</h1>
          </div>
          <div>
            <h2 className="ui sub header" data-test="increment-display">The counter is currently: <span className="ui large header">{this.state.counter}</span></h2>
            <button 
              className="ui primary button" 
              data-test="increment-button"
              onClick={() => this.setState({counter: this.state.counter + 1})}
            >
            Increment
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
