import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './../NavBar';
import Movies from './../Movies';
import Customers from './../Customers';
import Rentals from './../Rentals';
import NotFound from './../NotFound';
import MovieForm from './../MovieForm';
import './App.scss';

const App = () => {
    return (
        <React.Fragment>
        <NavBar />
        <main className='container app'>
            <Switch>
                <Route path='/movies/:id' component={MovieForm} />
                <Route path="/movies" component={Movies} />
                <Route path="/customers" component={Customers} />
                <Route path="/rentals" component={Rentals} />
                <Route path="/not-found" component={NotFound} />
                <Redirect from='/' exact to='/movies' />
                <Redirect to='/not-found' />
            </Switch>
        </main>
        </React.Fragment>
    );
}
 
export default App;