import React from 'react';
import './App.css';

// Context
// 1. Membuat context
const MyContext = React.createContext();

function App() {
  const state = {
    color: 'black',
    info: 'warning',
  };
  return (
    <MyContext.Provider className="App" value={state}>
      <header>
        <Navigation />
      </header>
    </MyContext.Provider>
  );
}

function Navigation() {
  return (
    <nav>
      <a href="">Home</a>
      <a href="">Contact</a>

      <Search />
      <Button />
    </nav>
  );
}

class Search extends React.Component {
  static contextType = MyContext;

  render() {
    return (
      <div>
        <label>Search</label>
        <input type="search" placeholder={this.context.color}/>
      </div>
    );
  }
}

function Button() { 
  return (
    <MyContext.Consumer>
      {context => <button>Warna yang kita dapat adalah {context.color} & infonya {context.info}</button>} 
    </MyContext.Consumer>
  );
}

export default App;
