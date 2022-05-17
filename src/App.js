import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Crud from './components/crud';
import Home from './components/home';
import Edit from './components/edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/crud' element = {<Crud />} />
          <Route path = '/' element = {<Home />} />
          <Route path = '/edit' element = {<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
