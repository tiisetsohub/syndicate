import { Link, useNavigate } from "react-router-dom";

import "./HeaderD.css";
import Applogo from '../../Assets/Images/applogo-white.PNG';

function HeaderD() {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/';
        navigate(path);
    }
    return (
        <div className="Header">
            <header className="app-header">
                <div className="left-header">
                    <img src={Applogo} alt="Logo" className="applogo" onClick={routeChange} />
                </div>
                <div className="right-header">
                    <div className="links-header" >
                        <Link to="/about" state={{ inApp: true }} class="link">ABOUT</Link>
                        <Link to="/contact" state={{ inApp: true }} class="link">CONTACT</Link>
                        <Link to="/login" className="link-sign">LOGIN</Link>
                    </div>

                </div>
            </header>
        </div>
    );
}

export default HeaderD;