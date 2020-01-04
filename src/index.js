import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
// import BadgeNew from './pages/badgeNew';
import Badges from './pages/badges';



const container = document.getElementById('app');

ReactDOM.render(
    <Badges></Badges>
    , container);
