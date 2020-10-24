import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/index';
import Homepage from './pages/Homepage/index';
import NotFound from './pages/404/index';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/Portfolio' component={Homepage} />
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
