import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Cats from './Cats';
import About from './About';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cats' component={Cats} />
            <Route path='/about' component={About} />
        </Switch>
    </main>
);

export default Main;