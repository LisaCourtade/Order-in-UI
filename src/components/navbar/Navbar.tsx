import './Navbar.css';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='logo-title'><Link className='link' to='/search'>ORDER-IN</Link></h1>
            <Link to='register' className='nav-lin link'>Register</Link>
        </div>
    )
}

