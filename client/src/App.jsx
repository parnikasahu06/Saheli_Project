import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ride from "./pages/Ride";
import Tracking from "./pages/Tracking";
import Contacts from "./pages/Contacts";
import Driver from "./pages/Driver";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/driver" element={<Driver />} />
      </Routes>
    </Router>
  );
}

export default App;