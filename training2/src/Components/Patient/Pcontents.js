import React from "react";
import AppinntmentCards from "../AppinntmentCards";
import { Route , Routes } from "react-router";
const Contents = () => {
    return (
      <div>
        <Routes>
          <Route path="/patient/Dashboard" element={<h2>Dashboard</h2>}></Route>
          <Route
            path="/patient/Assessments"
            element={<h2>Assessments</h2>}
          ></Route>
          <Route path="/patient/Health_Info" element={<h2>Info</h2>}></Route>
          <Route
            path="/patient/Appointments"
            element={<AppinntmentCards />}
          ></Route>
          <Route
            path="/patient/SubcPlans"
            element={<h2>Subscription Plans</h2>}
          ></Route>
          <Route path="/patient/Settings" element={<h2>Settings</h2>}></Route>
        </Routes>
      </div>
    );
  };

  export default Contents