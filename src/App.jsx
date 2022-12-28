import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path ='/' element={<Home/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
