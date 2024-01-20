import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import  LandingPage  from './pages/LandingPage';

function App() {
  return ( 
    <div>
      <SignUp/>
      <LandingPage/>
    </div>
  ) 
}

export default App;