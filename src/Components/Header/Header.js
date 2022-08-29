import { Link, useNavigate } from "react-router-dom";

import "./Header.css";
import Applogo from '../../Assets/Images/applogo-black.svg';
import Avatar from '../../Assets/Images/batman.png';

function Header(props){
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/';
        navigate(path);
    }
    return (
        <div className = "Header">
            <header className = "app-header">
                <div className = "left-header">
                    {props.avatar ? 
                        <img src={Avatar} alt="Avatar" className="avatar" onClick={routeChange} /> : 
                        <img src={Applogo} alt="Logo" className="applogo" onClick={routeChange} />
                    } 
                </div>
                <div className = "right-header">
                    <div className = "links-header" >
                        <Link to = "/login" class = "link">About</Link>
                        <Link to = "/" class = "link">Contact</Link>
                        <Link to = "/" class = "link">Help</Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;