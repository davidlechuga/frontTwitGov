import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BadgeNew from '../pages/badgeNew';
import Badges from '../pages/badges';

import Layout from './Layout'

function App() {
    
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={BadgeNew} />
                    <Route exact path="/informacion" component={Badges} />
                </Switch>
            </Layout>
        
        </BrowserRouter>
    )
}

export default App