import { useState } from "react";
import Login from "./Components/Login";
import Headers from "./Components/Header";
import "./App.css";
import { Layout, theme, Typography } from "antd";
const { Header, Content, Sider } = Layout;
import Register from "./Components/Signup";
import PrivateRoute from "./Components/privateroute";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Components/mainpage";
import AppinntmentCards from "./Components/AppinntmentCards";
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
      {/* <Headers /> */}

      {/* <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              marginTop: 50,
              minHeight: 280,
              background: colorBgContainer,
            }}
          > */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="doctor/*" element={<Mainpage />}></Route>
          <Route path="patient/*" element={<Mainpage/>}></Route>
        </Route>
      </Routes>
      {/* </Content>
        </Layout> */}
    </div>
  );
}
export default App;
