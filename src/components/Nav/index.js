import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import App from '../../App';

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>
                LJ Spencer
            </Link>
        </nav>
    )
}

export default App;