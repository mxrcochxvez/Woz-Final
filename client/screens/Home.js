import React, { Component } from 'react';
import me from '../images/me.jfif';

class Home extends Component {
    render() {
        return(
            <div className="label">
                <h1>Marco Chavez</h1>
                <img src={me}></img>
                <div className="aboutMe">
                    <h2>Hello World!</h2>
                    <p>
                        I can help your business grow by building you an amazing web application that your users will be able to interact with easily. My focus is on creating beautiful web applications that are full featured with rich user options, simple yet quick navigation, and tons of customizable options for you as the business owner. If you navigate to the about me page you can see more about me!
                    </p>
                </div>
                <div className="icons">
                    <a href="https://www.instagram.com/marcode_chavez/" target="__blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/marco-chavez-jr-334514b4/" target="__blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/marcode_chavez" target="__blank">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;
