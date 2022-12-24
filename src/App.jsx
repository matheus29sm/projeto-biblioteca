import './App.css';
import Navbar from './components/layout/Navbar';
import logo from './img/logo.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>
        Biblioteca
      </h1>
      <img src={logo} alt="B"/>
    </div>
  );
}

export default App;
