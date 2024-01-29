import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Admin from './pages/Admin'
import Volunteer from './pages/VolunteerPage'
import Specialist from './pages/SpecialistPage'
import  RestaurantForm  from './components/RestaurantForm';
import ShelterPage from './pages/ShelterPage';

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
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/shelter" element={<ShelterPage />} />
      </Routes>
    </Router>
  ); 
}

export default App;