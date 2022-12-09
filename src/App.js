import React from 'react';
import './App.css';

// HOC dan Context
const AuthContext = React.createContext();

function withAuth(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {context => <WrappedComponent {...this.props} {...context} />}
        </AuthContext.Consumer>
      );
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'randomUsername'
    };
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        <h1>I am App</h1>
        <Navigation />
      </AuthContext.Provider>
    );
  }
}

function Navigation() {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="/kontak">Kontak</a>
      <hr />
      <Button theme="dark" type="warning" />
    </nav>
  );
}

function ButtonBase(props) {
  return (
    <button className={props.theme}>Current Login: {props.username}</button>
  );
}

const Button = withAuth(ButtonBase);

export default App;
