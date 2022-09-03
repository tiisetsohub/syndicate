import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import Login from "./Screens/Login/Login";
import Hub from "./Screens/Hub/Hub";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hub" element={<Hub />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;