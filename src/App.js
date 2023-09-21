import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // npm i react-router-dom
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/RefugeeProfile";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="profile" exact element={<Profile />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
