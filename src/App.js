import React from 'react';
import './App.css';

// HOC: Higher-Order Components - Local Storage

function withLocalStorage(WrappedComponent) {
  return class extends React.Component {
    get(key) {
      return localStorage.getItem(key);
    }

    save(key, value) {
      localStorage.setItem(key, value);
    }

    remove(key) {
      localStorage.removeItem(key);
    }

    render() {
      return <WrappedComponent get={this.get} save={this.save} remove={this.remove} {...this.props} />
    }
  }
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    const name = this.props.get('name');

    if (!name) {
      // load nama dari API/Database
      this.props.save('name', 'user_random');
      this.setState({
        name: 'user_random'
      });
    } else {
      this.setState({
        name: this.props.get('name')
      });
    }
  }

  render() {
    return (
      <div>
        I am app {this.state.name}
      </div>
    );
  }
}

export default withLocalStorage(User);
