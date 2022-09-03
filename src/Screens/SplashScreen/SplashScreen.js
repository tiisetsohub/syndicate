import { useNavigate } from 'react-router-dom';

import './SplashScreen.css';
import HeaderA from '../../Components/HeaderA/HeaderA';
import Footer from '../../Components/Footer/Footer';

function SplashScreen() {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/login';
        navigate(path);
    }
    return (
        <div className="SplashScreen">
            <div class = 'header'>
                <HeaderA />
            </div>
            <div class = 'body'>
               <div className = 'body-splash'>
                    <h1>SYNIDCATE</h1>
                    <h3>Organising teams has never been easier.</h3>
                    <h6>The personnel hierarchy of a company can be viewed and managed on the highly customizable website Syndicate. Users of the website can manage teams, relocate, and keep an eye on their current staff. Additionally, it makes businesses run more efficiently.</h6>
                    <button class="button" onClick={routeChange}>LOGIN</button>
               </div>
            </div>
            <div class = 'footer'>
                <Footer />
            </div>
        </div>
    );
}

export default SplashScreen;
