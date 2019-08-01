import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Home from './screens/Home';
import NavBar from "./components/NavBar";

class App extends Component {
    render(){
        return(
            <div className="App">
                <NavBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));