import './App.css';

// Composition

function App() {
  return (
    <div className="App">
      <Welcome />
      <p>Konten utama</p>
      <Warning />
    </div>
  );
}

function Welcome() {
  return (
    <Notification status="success">
      <h1>Selamat Datang</h1>
      <p>Selamat Bergabung</p>
    </Notification>
  );
}

function Warning() {
  return (
    <Notification status="warning">
      <p>Jangan lupa bayar hutang</p>
    </Notification>
  );
}

function Notification(props) {
  return (
    <div className={`notification is-${props.status}`}>
      {props.children}
    </div>
  );
}

export default App;
