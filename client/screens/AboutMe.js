import React from 'react';

import '../style.css';

function AboutMe(props) {
    return(
      <div className="aboutme">
        <div className="sectionone jumbotron">
          <h1 className="titleone">My Areas Of Expertise</h1>
          <ul className="skills">
            <li>ReactJS</li>
            <li>HTML, CSS, and JavaScript</li>
            <li>Database Technologies such as: MySQL, and MongoDB</li>
            <li>Building RESTful APIs using NodeJS and Express</li>
            <li>Using authentication technologies like Passport with Express</li>
            <li>MVC</li>
            <li>Source Control with GitHub</li>
            <li>Some exposure to languages such as Java, C#, and C/C++</li>
          </ul>
          <section className="sectiontwo">
            <h1>My Long Term Goals</h1>
            <p>Ever since I was in middle school I was programming. It began with my first computer getting a virus. My mother sent it to a friend who
              knew how to repair computers, because he worked in IT at some IT company I don't remember. He told me that he couldn't make it back to how
              it was before, that it was broken unless I wanted to learn something new... He called this new thing "linux". I never knew what windows, macOS,
              and linux were. I always assumed that all phones and computers were the same. Once he installed linux onto my computer, he immediately taught
              me how to run java applications through the CLI because my favorite game was minecraft which ran on Java. During this period in time Minecraft was
              never intended to run on a linux system, because of this if I wanted to play Minecraft I had to manually start a java virtual machine. 
              Ever since then I had to learn how to work around all of the limitations of working with a linux machine which meant I had to learn all about
              the linux CLI.
            </p>
          </section>
        </div>
      </div>  
    );
}

export default AboutMe;