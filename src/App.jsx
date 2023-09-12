import { useState } from "react";
import Login from "./Components/Login";
import "./App.css";
import { Layout,theme,Typography } from "antd";
const { Header, Content, Sider } = Layout;
import Register from "./Components/Signup";
import PrivateRoute from "./Components/privateroute";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
   const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <div>
          <Header
          theme = "light"
            style={{
              position: "fixed",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#E9E7E7",
              boxShadow:"3px 3px 10px ",
              borderRadius:15
            }}
          ><Typography.Title style={{color:"green", fontFamily:"Georgia, serif"}}>NIYAMA </Typography.Title></Header>
          </div>
        </Layout>
        <Layout>
        <Content style={{
            padding: 24,
            margin: 0,
            marginTop:50,
            minHeight: 280,
            background: colorBgContainer,
          }}>
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
     
        </Routes>
        </Content>
       
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
