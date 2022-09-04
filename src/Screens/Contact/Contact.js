import React from 'react';
import { useLocation } from 'react-router-dom';


import './Contact.css';
import HeaderC from '../../Components/HeaderC/HeaderC';
import HeaderD from '../../Components/HeaderD/HeaderD';
import Footer from '../../Components/Footer/Footer';


function Contact() {
    const { state } = useLocation();
    const { inApp } = state;
    return (
        <div className='Contact'>
            <div class='header'>
                {inApp ?
                    <HeaderD /> :
                    <HeaderC />
                }
            </div>
            <div class='body'>
                <div className='body-contact'>
                    <h1>CONTACT</h1>
                    <h3>Built by <a className = "tii-link" href='http://github.com/tiisetsohub'>Tiisetso.</a></h3>
                </div>
            </div>
            <div class='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Contact