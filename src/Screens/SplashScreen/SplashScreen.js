import { useNavigate } from 'react-router-dom';

import './SplashScreen.css'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function SplashScreen(){
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/login';
        navigate(path);
    }
    return (
        <div>
            <div class = "header">
                <Header />
            </div>
            <div class = "body">
                <h1 className = "title">SYNDICATE</h1>
                <button class = "general-button" onClick={routeChange}>LOGIN</button>
            </div>
            <div class = "footer">
                <Footer />
            </div>
        </div>
    );
}

export default SplashScreen;