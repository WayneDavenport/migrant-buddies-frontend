import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // npm i react-router-dom
import Login from "./pages/Login/Login";
import Refugee from "./pages/Profile/Refugee/RefugeeProfile";
import Buddy from "./pages/Profile/Buddy/BuddyProfile";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/refugee" exact element={<Refugee />} />
          <Route path="/buddy" exact element={<Buddy />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
