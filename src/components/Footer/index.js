import React from 'react';

import './style.css';

function Footer() {
    return (
        <footer>
            <p id='copy'>&copy; Copyright 2020.</p>
            <p id='madeWith'>Made with &hearts; in SLC.</p>
            
            {/* Twitter Link */}
            <a href='https://twitter.com/ljspencer97' target='_blank' rel='noopener noreferrer'>
                <i id='twitter' className='fab fa-twitter-square'></i>
            </a>

            <a id='github' href='https://github.com/hockeyduck3' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github-square'></i>
            </a>

            <a id='linkedin' href='https://linkedin.com/in/lj-spencer' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin'></i>
            </a>

        </footer>
    )
}

export default Footer;