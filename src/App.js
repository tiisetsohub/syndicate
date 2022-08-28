import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import Login from "./Screens/Login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<SplashScreen />} />
        <Route path="/login" element = {<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
