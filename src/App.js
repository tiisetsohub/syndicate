import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import Login from "./Screens/Login/Login";
import Hub from "./Screens/Hub/Hub";
import Edit from "./Screens/Edit/Edit";
import Add from "./Screens/Add/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;