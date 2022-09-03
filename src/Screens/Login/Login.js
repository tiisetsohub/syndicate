import { useNavigate } from 'react-router-dom';
import { loginmethod } from '../../firebase-config';
import { React, useState } from 'react';

import './Login.css';
import HeaderA from "../../Components/HeaderA/HeaderA";
import Footer from "../../Components/Footer/Footer";

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loggedIn,setLoggedIn] = useState(false);
    

    let navigate = useNavigate();

    /*-------------------------------------------------------------*/
    const routeChange = () => {
        let path = '/hub';
        navigate(path,{state: {email:email}});
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleLogin = async() => {
        try {
            await loginmethod(email, password)
            setLoggedIn(true)
        } catch {
            alert('Error! User not found in database');
        }
    }

    
    /*-------------------------------------------------------------*/

    return (
        <div className = "Login">
            {loggedIn ? routeChange() : null}
            <div class='header'>
                <HeaderA />
            </div>
            <div class='body'>
                <div className="inputform">
                    <input class="inputbox" type="text" placeholder="Email" onChange={handleEmail}/>
                    <input class="inputbox" type="password" placeholder="Password" onChange={handlePassword}/>
                    <button class = 'button' onClick={handleLogin}>LOGIN</button>
                </div>
            </div>
            <div class='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Login;