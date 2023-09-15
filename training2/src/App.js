import Login from "./Components/Login";
import "./App.css";
import Register from "./Components/Signup";
import PrivateRoute from "./Components/privateroute";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./Components/mainpage";
import Doctor from "./Components/Doctors";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="doctor/*" element={<Doctor />}></Route>
          <Route path="patient/*" element={<Mainpage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
