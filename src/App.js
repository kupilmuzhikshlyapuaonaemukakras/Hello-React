import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello World!</h1>
    </div>
  );
}

function Nav() {
  return (
    <nav class="Navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
}

export default App;
