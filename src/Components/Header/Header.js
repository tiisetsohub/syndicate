import { Link } from "react-router-dom";

import "./Header.css";

function Header(){
    return (
        <div className = "Header">
            <header className = "app-header">
                <div className = "left-header">
                    <h1 className = "headingtext">SYNDICATE</h1>
                </div>
                <div className = "right-header">
                    <div className = "links-header">
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