import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import Login from "./Screens/Login/Login";
import Hub from "./Screens/Hub/Hub";
import Edit from "./Screens/Edit/Edit";
import Add from "./Screens/Add/Add";
import About from "./Screens/About/About";
import Tree from "./Screens/Tree/Tree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/about" element={<About />} />
        <Route path="/tree" element={<Tree />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;