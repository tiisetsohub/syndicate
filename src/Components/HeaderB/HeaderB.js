import { Link, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";

import "./HeaderB.css";

function HeaderB(props) {
    let navigate = useNavigate();
    const [avatar, setAvatar] = useState('');

    /*----------------------------------------------------------------- */

    const routeChange = () => {
        navigate(-1);
    }

    const handleSearch = (event) => {
        props.setSearchTerm(event.target.value)
    }

    useEffect(() => {
        let word = (props.email).trim().toLowerCase();
        let md5 = require('md5');
        setAvatar('https://www.gravatar.com/avatar/' + md5(word))
    },[props.email]);
    /*----------------------------------------------------------------- */
    return (
        <div className="Header">
            <header className="app-header">
                <div className="left-header">
                    <img src={avatar} alt="avatar" className="avatar" onClick={routeChange} />
                </div>
                <div className="right-header">                
                    <div className="links-header">
                        <Link to="/about" state={{ inApp: false }} class="link">ABOUT</Link>
                        <Link to="/contact" state={{ inApp: false }} class="link">CONTACT</Link>
                    </div>
                    <input type="text" class="inputboxb" placeholder="Search" onChange={handleSearch}/>
                    
                </div>
            </header>
        </div>
    );
}

export default HeaderB;