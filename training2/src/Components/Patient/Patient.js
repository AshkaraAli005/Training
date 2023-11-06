import React, { useState } from "react";
import Contents from "./patientContents";
import {
  Layout,
  Menu,
  Typography,
  theme,
  Image,
  Popconfirm,
  Modal,
  Avatar,
} from "antd";
import { Content, Header, Footer } from "antd/es/layout/layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import {
  CalendarOutlined,
  CrownOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  SettingOutlined,
  HomeOutlined,
  ProfileOutlined,
  InfoCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import NewNotification from "../../notification/NewNotification";
import ProfileContent from "../ProfileDropdown/ProfileContent";
import Dropdown from "../ProfileDropdown/Dropdown";

const Patient = () => {
  const [selectedkey, setket] = useState("/Mainpage/Appointments");
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  const menuItems = [
    {
      label: "Dashboard",
      key: "Dashboard",
      icon: <HomeOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Assessments",
      key: "Assessments",
      icon: <FileTextOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Health Info",
      key: "Health_Info",
      icon: <InfoCircleOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Appoinments",
      key: "Appointments",
      icon: <CalendarOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Subscribtion Plans",
      key: "SubcPlans",
      icon: <CrownOutlined style={{ fontSize: 20 }} />,
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
              nav(key);
            }}
          >
            {" "}
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
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Dropdown /> <Avatar size="large" icon={<UserOutlined />} />
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
          <Footer>
            <NewNotification />
          </Footer>
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
          path="/Dashboard"
          element={
            <div>
              <h2 className="head_text">Dashboard</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Assessments"
          element={
            <div>
              <h2 className="head_text">Dashboard</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Health_Info"
          element={
            <div>
              <h2 className="head_text">Health Info</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Appointments"
          element={
            <div>
              <h2 className="head_text">Appoinments</h2>
            </div>
          }
        ></Route>
        <Route
          path="/SubcPlans"
          element={
            <div>
              <h2 className="head_text">Subscription Plans</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Profile"
          element={
            <div>
              <h2 className="head_text">Profile</h2>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
};
