import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Admin from './pages/Admin'
import  RestaurantForm  from './components/RestaurantForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurantform" element={<RestaurantForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  ); 
}

export default App;