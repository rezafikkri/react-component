import React from 'react';
import './App.css';

// HOC: Higher-Order Components

const withUser = (WrappedComponent) => {
  class WithUser extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        user: 'RezaFikkri',
      };
    }

    render() {
      return <WrappedComponent user={this.state.user} {...this.props} />
    }
  }

  return WithUser;
};

function App(props) {
  return (
    <div>
      I am app {props.user}
    </div>
  );
}

export default withUser(App);
