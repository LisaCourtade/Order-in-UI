import { Navbar } from './components/navbar/Navbar';
import { Outlet } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
