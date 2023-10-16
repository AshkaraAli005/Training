import React, { useState } from "react";
import AppinntmentCards from "./AppinntmentCards";
import { Layout, Menu, Typography, theme, Image, Modal } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import DashboardContents from "./dashboardContents";

import {
  CalendarOutlined,
  HomeOutlined,
  InfoCircleFilled,
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

  const { confirm } = Modal;
  const showConfrm = () => {
    confirm({
      title: "Are you sure you want to logout?",
      okText: "Logout",
      okType: "danger",
      icon: <InfoCircleFilled style={{ color: "#02b2ff" }} />,
      onOk() {
        handleLogout();
      },
      oncancel() {},
    });
  };

  const onClickHandler = (id) => {
    console.log(id);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  const menuItems = [
    {
      label: "Dashboard",
      key: "",
      icon: <HomeOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "My Appoinments",
      key: "Appointments",
      icon: <ScheduleOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "My Avaiability",
      key: "Availability",
      icon: <CalendarOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "My Patients",
      key: "My_patients",
      icon: <TeamOutlined style={{ fontSize: 20 }} />,
    },
    {
      key: "SettingsSubMenu",
      icon: <SettingOutlined style={{ fontSize: 20 }} />,
      label: "Settings",
      children: [
        {
          key: "Profile",
          icon: <ProfileOutlined style={{ fontSize: 15 }} />,
          label: "Profile",
        },
        {
          key: "Logout",
          label: (
            <span onClick={showConfrm}>
              <LogoutOutlined style={{ fontSize: 15 }} /> Logout
            </span>
          ),
        },
      ],
    },
  ];

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
            defaultSelectedKeys={[selectedkey]}
            defaultOpenKeys={["doctor/Appointments"]}
            onClick={({ key }) => {
              if (key !== "Logout") {
                nav(key);
                setSelectedKey(key);
              }
            }}
          >
            {menuItems.map((item) => {
              if (item.children) {
                return (
                  <Menu.SubMenu
                    key={item.key}
                    icon={item.icon}
                    title={item.label}
                  >
                    {item.children.map((child) => (
                      <Menu.Item key={child.key} icon={child.icon}>
                        {child.label}
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                  </Menu.Item>
                );
              }
            })}
          </Menu>
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
          path="/"
          element={<h2 className="head_text">Dashboard</h2>}
        ></Route>
        <Route
          path="/Appointments"
          element={<h2 className="head_text">Appointments</h2>}
        ></Route>
        <Route
          path="/Availability"
          element={<h2 className="head_text">My Availability</h2>}
        ></Route>
        <Route
          path="/My_patients"
          element={<h2 className="head_text">My Patients</h2>}
        ></Route>
        <Route
          path="/Profile"
          element={<h2 className="head_text">Profile</h2>}
        ></Route>
      </Routes>
    </div>
  );
};

const Contents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardContents />}></Route>
        <Route path="/Appointments" element={<AppinntmentCards />}></Route>
        <Route
          path="/Availability"
          element={<h2>My availability status</h2>}
        ></Route>
        <Route path="/My_patients" element={<h2>My Patients..</h2>}></Route>
        <Route path="/Profile" element={<h2>Your Profile</h2>}></Route>
      </Routes>
    </div>
  );
};
