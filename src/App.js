import logo from "./logo.svg";
import "./App.css";
import Loginpage from "./LoginPage/Loginpage";
import Register from "./Registerpage/Register";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data1 from "./Components/Sidebar/Data1";
import Data2 from "./Components/Sidebar/Data2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
