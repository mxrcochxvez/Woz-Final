import React, { Component } from 'react';
import me from '../images/me.jfif';

class Home extends Component {
    render() {
        return(
            <div class="label">
                <h1>Marco Chavez</h1>
                <img src={me}></img>
                <div className="aboutMe">
                    <h2>Hello World!</h2>
                </div>
            </div>
        );
    }
}

export default Home;