import './Landing.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Landing() {
    return (
        <div>
            <div class="header">
                <Header avatar={true}/>
            </div>
            <div class="body">
                <h1>hi</h1>
            </div>
            <div class="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Landing;