import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/authenticate" />} />
          <Route path="/authenticate" element={<Authentication />} />
          <Route path="/home" element={<Home />} />
          {/* Add a route for successful registration redirection */}
          <Route
            path="/registration-success"
            element={<Navigate to="/home"/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
