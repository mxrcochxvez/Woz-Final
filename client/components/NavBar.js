import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router} from "react-router-dom";

import Home from '../screens/Home';

import '../style.css';

class NavBar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="navigation">
                    <Router>
                        <ul>
                            <li>
                                <Link className="link" to="/">Home</Link>
                            </li>
                        </ul>
                        <Route exact path="/" component={Home} />
                    </Router>
                </div>
            </div>
        );
    }
}

export default NavBar;
