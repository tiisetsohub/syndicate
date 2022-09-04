import React from 'react';
import { useLocation } from 'react-router-dom';


import './About.css';
import HeaderC from '../../Components/HeaderC/HeaderC';
import HeaderD from '../../Components/HeaderD/HeaderD';
import Footer from '../../Components/Footer/Footer';


function About() {
    const { state } = useLocation();
    const { inApp } = state;
  return (
    <div className = 'About'>
        <div class = 'header'>
            {inApp ? 
                <HeaderD />:
                <HeaderC />
            }
        </div>
        <div class = 'body'>
            <div className = 'body-about'>
                <h1>ABOUT</h1>
                <h3>A software tool for organising personal hierarchy</h3>
                <h6>Built using React.js, Node.js and Firebase</h6>
            </div>
        </div>
        <div class = 'footer'>
            <Footer />
        </div>
    </div>
  )
}

export default About