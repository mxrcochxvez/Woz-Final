import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router} from "react-router-dom";

import Home from '../screens/Home';
import AboutMe from '../screens/AboutMe';

import '../style.css';

class NavBar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="navigation">
                    <Router>
                        <div className="links">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link left" to="/aboutme/">About</Link>
                        </div>

                        <Route exact path="/" component={Home} />
                        <Route path="/aboutme/" component={AboutMe} />
                    </Router>
                </div>
            </div>
        );
    }
}

export default NavBar;
