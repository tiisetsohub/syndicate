import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import Login from "./Screens/Login/Login";
import Landing from "./Screens/Landing/Landing";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<SplashScreen />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/landing" element={<Landing />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
