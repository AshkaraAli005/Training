import Login from "./Components/Login";
import Register from "./Components/Signup";
import PrivateRoute from "./Components/privateroute";
import { Routes, Route } from "react-router-dom";
import Patient from "./Components/Patient/Patient";
import Doctor from "./Components/Doctors";
import { App } from "antd";

import SpeechRecognitionComponent from "./Components/NewSpeechrecognition";

import "./App.css";
import MessageForm from "./Components/webHooks/MessageForm";
import MessageList from "./Components/webHooks/MessageList";

const Apps = () => {
  return (
    <div className="App">
      {/* <ReduxLearning /> */}
      {/* <Home/> */}
      {/* <Routes>
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
      </Routes> */}
      {/* <Speechrecognition/> */}
      {/* <SpeechRecognitionComponent/> */}
      <MessageForm />
      <MessageList />
    </div>
  );
};
export default Apps;
