import { Link, useNavigate } from "react-router-dom";

import "./HeaderC.css";
import Applogo from '../../Assets/Images/applogo-white.PNG';

function HeaderC() {
    let navigate = useNavigate();

    const routeChange = () => {
        navigate(-1);
    }
    return (
        <div className="Header">
            <header className="app-header">
                <div className="left-header">
                    <img src={Applogo} alt="Logo" className="applogo" onClick={routeChange} />
                </div>
                <div className="right-header">
                    <div className="links-header" >
                        <Link to="/about" state={{ inApp: false }}class="link">ABOUT</Link>
                        <Link to="/contact" state={{ inApp: false }}class="link">CONTACT</Link>
                    </div>
                    <input type="text" class="inputboxb" placeholder="Search" />

                </div>
            </header>
        </div>
    );
}

export default HeaderC;