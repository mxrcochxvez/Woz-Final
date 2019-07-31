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
                    <p>While navigating through my website, I really hope you find yourself just as amused as I was while creating this.
                        I tend to put all of my effort into my projects and love learning new things along the way. In this project 
                        I will be using some things that I learned outside of Woz U to show you how well I can grasp new concepts and materials.
                    </p>
                </div>
                <div className="icons">
                    <a href="https://www.instagram.com/marcode_chavez/" target="__blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="__blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.twitter.com" target="__blank">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;