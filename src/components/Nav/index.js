import React from 'react';
import { Link } from 'react-router-dom';

import Resume from '../../PDF/LJ-Spencer-Resume-2020.pdf';
import './style.css';

function Nav() {
    const body = document.body;
    const navbar = document.getElementsByClassName('collapsed');
    
    body.addEventListener('click', function() {
        if (navbar.length === 0) {
            document.querySelector('.navbar-toggler').click();
        }
    });

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            
            {/* Logo / Homepage Link */}
            <Link className='navbar-brand' to='/'>
                LJ Spencer
            </Link>

            <button id='navbarBtn' className='navbar-toggler collapsed' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav ml-auto'>

                    {/* About */}
                    <li className={window.location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                        <Link to='/' className='nav-link'>About</Link>
                    </li>

                    {/* Portfolio Link */}
                    <li className={window.location.pathname === '/Portfolio' ? 'nav-item active' : 'nav-item'}>
                        <Link to='/Portfolio' className='nav-link'>Portfolio</Link>
                    </li>

                    {/* Resume Link */}
                    <li className={window.location.pathname === '/Resume' ? 'nav-item active' : 'nav-item'}>
                        <a href={Resume} className='nav-link' target='_blank' rel='noopener noreferrer'>Resume</a>
                    </li>

                    {/* Contact Link */}
                    <li className={window.location.pathname === '/Contact' ? 'nav-item active' : 'nav-item'}>
                        <Link to='/Contact' className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;