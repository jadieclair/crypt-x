import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin"; 
import Home from "./Home"; 
import ForgotPassword from "./ForgotPassword";

// Component for handling password login using Firebase authentication
function PasswordLoginWithFirebase() {
    return (
        <BrowserRouter>
            <div>
                {/* Define routes using React Router */}
                <Routes>
                    {/* Route for the main registration and login page */}
                    <Route path="/" element={<RegisterAndLogin />} />

                    {/* Route for the home page after successful login */}
                    <Route path="/home" element={<Home />} />

                    {/* Route for the password reset page */}
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default PasswordLoginWithFirebase;
