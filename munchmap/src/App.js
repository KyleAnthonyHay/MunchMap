import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import  RestaurantForm  from './components/RestaurantForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/restaurantform" element={<RestaurantForm />} />
      </Routes>
    </Router>
  ); 
}

export default App;