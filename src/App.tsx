import Navbar from '../components/Navbar.tsx'
import Home from "../pages/Home.tsx"
import './App.css'

export default function App(){
  return (
    <div className='app-container'>
      <Home/>
      <div className='navbar-container'>
        <Navbar/>
      </div>
      
    </div>
  );
}
