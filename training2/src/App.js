import Login from "./Components/Login";
import Register from "./Components/Signup";
import PrivateRoute from "./Components/privateroute";
import { Routes, Route } from "react-router-dom";
import Patient from "./Components/Patient/Patient";
import Doctor from "./Components/Doctors";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="doctor/*" element={<Doctor />}></Route>
          <Route path="patient/*" element={<Patient />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
