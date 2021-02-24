import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import RegisterClient from './views/register-client';
import ListClient from './views/list-client';
import DetailClient from './views/detail-client';
import Reservation from './views/reservation';
import Gallery from './views/gallery';
import Contact from './views/contact';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/register-client" component={RegisterClient} />
    <Route path="/list-client" component={ListClient} />
    <Route path="/detail-client/:id" component={DetailClient} />
    <Route path="/reservation" component={Reservation} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;