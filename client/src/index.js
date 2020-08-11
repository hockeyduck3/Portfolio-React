import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import './index.css';
import Footer from './components/Footer/index';

ReactDom.render([<App key='1' />, <Footer key='2' />], document.getElementById('root'));
