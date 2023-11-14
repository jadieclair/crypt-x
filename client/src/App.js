import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterAndLogin from "./pages/RegisterAndLogin"; 
import './pages/ForgotPassword';
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterAndLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgotpassword" element={< ForgotPassword />} />

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
