import React, { useState } from "react";
import AppinntmentCards from "./AppinntmentCards";
import { Layout, Menu, Typography, theme, Image } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import {
  CalendarOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Doctor() {
  const [selectedkey, setket] = useState("/doctor/Appointments");
  const nav = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div style={{ display: "flex", flexDirection: "colunm" }}>
      <Layout>
        <Sider
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            marginLeft: 3,
            marginTop: 5,
            boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <Image
              src="niyamaimg.png"
              alt="Logo"
              preview={false}
              style={{ width: "150px", height: "auto", marginRight: 10 }}
            />
          </div>
          <br />
          <Menu
            style={{ borderRadius: 20, color: "green" }}
            mode="inline"
            defaultSelectedKeys={[selectedkey]}
            onClick={({ key }) => {
              if (key === "Logout") {
                localStorage.removeItem("token");
                nav("/");
              } else {
                nav(key);
              }
            }}
            items={[
              {
                label: "Appoinments",
                key: "doctor/Appointments",
                icon: <CalendarOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "Settings",
                key: "doctor/Settings",
                icon: <SettingOutlined style={{ fontSize: 20 }} />,
              },
              { label: "Logout", key: "Logout", icon: <LogoutOutlined /> },
            ]}
          ></Menu>
        </Sider>
        <Content>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Layout>
              <Header
                style={{
                  borderRadius: 10,
                  marginLeft: "7px",
                  marginRight: "6px",
                  marginTop: "5px",
                  backgroundColor: "white",
                  paddingBottom: 10,
                  width: "84vw",
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "1px 1px 10px rgba(0,0,0,0.5)  ",

                  background: colorBgContainer,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 10,
                    marginLeft: -20,
                  }}
                >
                  <Typography.Title>
                    <Headers />
                  </Typography.Title>
                </div>
              </Header>
            </Layout>
            <Content
              style={{
                margin: "5px 10px 5px 5px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                height: "85vh",
                width: "84vw",
                borderRadius: 10,
                overflowY: "auto",
                boxShadow: "1px 1px 10px rgba(0,0,0,0.5) ",
              }}
            >
              <Contents />
            </Content>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Doctor;

const Headers = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/doctor/Appointments"
          element={
            <h2 style={{ color: "green", fontFamily: "monospace" }}>
              Appointments
            </h2>
          }
        ></Route>
        <Route
          path="/doctor/Settings"
          element={
            <h2 style={{ color: "green", fontFamily: "monospace" }}>
              Settings
            </h2>
          }
        ></Route>
      </Routes>
    </div>
  );
};

const Contents = () => {
  return (
    <div>
      <Routes>
        <Route path="/doctor/Appointments" element={<AppinntmentCards />}></Route>
        <Route path="/doctor/Settings" element={<h2>Settings</h2>}></Route>
      </Routes>
    </div>
  );
};
