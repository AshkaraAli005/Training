import React, { useState } from "react";
import Contents from "./Pcontents";
import { Layout, Menu, Typography, theme, Image } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import {
  CalendarOutlined,
  CrownOutlined,
  DashboardOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  SettingOutlined,
  RightOutlined,
  LeftOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const Patient = () => {
  const [selectedkey, setket] = useState("/Mainpage/Appointments");
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div style={{ display: "flex", flexDirection: "colunm" }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="sider1"
          style={{ backgroundColor: "white" }}
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
                label: "Dashboard",
                key: "patient/Dashboard",
                icon: <HomeOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "Assessments",
                key: "patient/Assessments",
                icon: <FileTextOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "Health Info",
                key: "patient/Health_Info",
                icon: <InfoCircleOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "Appoinments",
                key: "patient/Appointments",
                icon: <CalendarOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "Subscribtion Plans",
                key: "patient/SubcPlans",
                icon: <CrownOutlined style={{ fontSize: 20 }} />,
              },
              {
                label: "Settings",
                key: "patient/Settings",
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
              }}
            >
              <Contents />
            </Content>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Patient;

const Headers = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/patient/Dashboard"
          element={
            <h2 style={{ color: "green", fontFamily: "monospace" }}>
              Dashboard
            </h2>
          }
        ></Route>
        <Route
          path="/patient/Assessments"
          element={
            <h2 style={{ color: "green", fontFamily: "monospace" }}>
              Assessments
            </h2>
          }
        ></Route>
        <Route
          path="/patient/Health_Info"
          element={
            <h2 style={{ color: "green", fontFamily: "monospace" }}>
              Health Info
            </h2>
          }
        ></Route>
        <Route
          path="/patient/Appointments"
          element={
            <h2 style={{ color: "green", fontFamily: "monospace" }}>
              Appointments
            </h2>
          }
        ></Route>
        <Route
          path="/patient/SubcPlans"
          element={
            <h2 style={{ color: "green", fontFamily: "monospace" }}>
              Subscription Plans
            </h2>
          }
        ></Route>
        <Route
          path="/patient/Settings"
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
