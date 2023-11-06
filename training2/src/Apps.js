import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Signup";
import PrivateRoute from "./Components/Authentication/privateroute";
import { Routes, Route } from "react-router-dom";
import Patient from "./Components/Patient/Patient";
import Doctor from "./Components/Doctor/Doctors";
import { App } from "antd";
import "./App.css";
import Dropdown from "./Components/ProfileDropdown/Dropdown"
const Apps = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <App message={{ maxCount: 1 }}>
              <Login />
            </App>
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="doctor/*" element={<Doctor />}></Route>
          <Route path="patient/*" element={<Patient />}></Route>
        </Route>
      </Routes>
      {/* <Dropdown /> */}
    </div>
  );
};
export default Apps;
