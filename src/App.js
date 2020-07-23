import React from 'react';
import { Router, Route } from 'react-router-dom';

import Nav from './components/Nav/index';
import Homepage from './pages/Homepage/index';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Route exact path='/' component={Homepage} />
            </div>
        </Router>
    )
}

export default App;