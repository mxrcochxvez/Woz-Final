import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Home from './screens/Home';

class App extends Component {
    render(){
        return(
            <div className="App">
                <Home />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
