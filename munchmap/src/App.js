import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import  LandingPage  from './pages/LandingPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  ); 
}

export default App;