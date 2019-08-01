import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router} from "react-router-dom";

import Home from '../screens/Home';
import Projects from '../components/Projects';

import '../style.css';

class NavBar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="navigation">
                    <Router>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                        </ul>
                        <Route exact path="/" component={Home} />
                        <Route path="/projects" component={Projects} />
                    </Router>
                </div>
            </div>
        );
    }
}

export default NavBar;