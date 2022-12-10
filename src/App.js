import React from 'react';
import './App.css';

// Render Props

class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    }
  }

  handleOnIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  }

  handleOnDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.handleOnDecrement}> - </button>
        <button type='button' onClick={this.handleOnIncrement}> + </button>

        {this.props.render(this.state.amount)}
      </div>
    );
  }
}

function Rupiah(props) {
  return <h1>Rupiah = {props.amount}</h1>;
}

function Dollar(props) {
  return <h1>Dollar = {props.amount * 14000}</h1>;
}

class App extends React.Component {
  render() {
    return (
      <Amount render={amount => (
        <div>
          <Rupiah amount={amount} />
          <Dollar amount={amount} />
        </div>
      )} />
    );
  }
}

export default App;
