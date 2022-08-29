import { useNavigate } from 'react-router-dom';

import './Login.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Login() {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/landing';
        navigate(path);
    }
    return (
        <div>
            <div class="header">
                <Header />
            </div>
            <div class="body">
                <div className = "inputform">
                    <input class = "inputbox" type="text" placeholder="Email"/>
                    <input class = "inputbox" type="text" placeholder="Password" />
                    <button class = "general-button" onClick={routeChange}>LOGIN</button>
                </div>
            </div>
            <div class="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Login;