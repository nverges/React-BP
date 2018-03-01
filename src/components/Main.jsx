// Dependencies
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import NavBar from './NavBar/NavBar.jsx';
import Home from './Home.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';

class Main extends Component {

    render() {
        return (
            <div>
                <NavBar />
                {/* Write code here */}
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component= { Contact } />
                    {/* <Route component={ Home } /> */}
                </Switch>
            </div>
        )
    }
}

export default Main;