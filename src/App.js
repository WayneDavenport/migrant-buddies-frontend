import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // npm i react-router-dom
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
