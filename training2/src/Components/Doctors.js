import React, { useState } from "react";
import AppinntmentCards from "./AppinntmentCards";
import { Layout, Menu, Typography, theme, Image } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import {
  CalendarOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";

function Doctor() {
  const [selectedkey, setSelectedKey] = useState("/doctor/Appointments");
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div style={{ display: "flex", flexDirection: "colunm" }}>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="sider1 col10"
          style={{
            backgroundColor: "white",
          }}
        >
          <div className={collapsed ? "shrtlogo" : "logo"}>
            <Image
              src={collapsed ? "/shortlogo.jpg" : "/niyamaimg.png"}
              alt="Logo"
              preview={false}
              className={collapsed ? "shrtlogo" : "logo"}
            />
          </div>
          <br />
          <Menu
          className="menu"
            mode="inline"
            defaultSelectedKeys={["doctor/Appointments"]}
            defaultOpenKeys={["doctor/Appointments"]}
            onClick={({ key }) => {
              if (key === "Logout") {
                localStorage.removeItem("token");
                nav("/");
              } else {
                nav(key);
                setSelectedKey(key);
              }
            }}
            items={[
              {
                label: "Dashboard",
                key: "doctor/",
                icon: <HomeOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "My Appoinments",
                key: "doctor/Appointments",
                icon: <ScheduleOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "My Avaiability",
                key: "doctor/Availability",
                icon: <CalendarOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "My Patients",
                key: "doctor/My_patients",
                icon: <TeamOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "Settings",
                key: "doctor/Settings",
                icon: <SettingOutlined style={{ fontSize: 20 }} />,
                children: [
                  {
                    label: "Profile",
                    key: "doctor/Profile",
                    icon: <ProfileOutlined style={{ fontSize: 15 }} />,
                  },
                  {
                    label: "Logout",
                    key: "Logout",
                    icon: <LogoutOutlined style={{ fontSize: 15 }} />,
                  },
                ],
              },
            ]}
          ></Menu>
        </Sider>
        <Content className="main-content">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Layout>
              <Header
                className="main-header"
                style={{
                  background: colorBgContainer,
                  
                }}
              >
                <div className="typo-header">
                  <Typography.Title>
                    <Headers />
                  </Typography.Title>
                </div>
              </Header>
            </Layout>
            <Content
              className="main-content2"
              style={{
                background: colorBgContainer,
                borderRadius: "5px",
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
          path="/doctor/"
          element={
            <h2 className="head_text">
              Dashboard
            </h2>
          }
        ></Route>
        <Route
          path="/doctor/Appointments"
          element={
            <h2 className="head_text">
              Appointments
            </h2>
          }
        ></Route>
        <Route
          path="/doctor/Availability"
          element={
            <h2 className="head_text">
              My Availability
            </h2>
          }
        ></Route>
        <Route
          path="/doctor/My_patients"
          element={
            <h2 className="head_text">
              My Patients
            </h2>
          }
        ></Route>
        <Route
          path="/doctor/Settings"
          element={
            <h2 className="head_text">
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
        <Route
          path="/doctor/Appointments"
          element={<AppinntmentCards />}
        ></Route>
        <Route path="/doctor/Settings" element={<h2>Settings</h2>}></Route>
      </Routes>
    </div>
  );
};
