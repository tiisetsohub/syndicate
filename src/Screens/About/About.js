import React from 'react';

import './About.css';
import HeaderA from '../../Components/HeaderA/HeaderA';
import Footer from '../../Components/Footer/Footer';


function About() {
  return (
    <div className = 'About'>
        <div class = 'header'>
            <HeaderA />
        </div>
        <div class = 'body'>
            <div className = 'body-about'>
                <h1>SYNIDCATE</h1>
                <h3>Organising teams has never been easier.</h3>
                <h6>The personnel hierarchy of a company can be viewed and managed on the highly customizable website Syndicate. Users of the website can manage teams, relocate, and keep an eye on their current staff. Additionally, it makes businesses run more efficiently.</h6>
            </div>
        </div>
        <div class = 'footer'>
            <Footer />
        </div>
    </div>
  )
}

export default About