import React, { useState } from "react";
import AppinntmentCards from "./AppinntmentCards";
import { Button, Layout, theme, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined
  
} from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";

const { Sider, Content, Header } = Layout;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nav = useNavigate();
  return (
<div>
    <Layout style={{ margin: 0 }}>
      <Sider
      style={{borderRadius:20}}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
        style={{borderRadius:20}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Assessments",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Health Information",
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Appointments",
            },
            {
                key: '5',
                icon: <UploadOutlined />,
                label: 'Subscribtion Plans',
              },
              {
                key: '6',
                icon: <SettingOutlined />,
                label: 'settings',
              },
          ]}
        />
      </Sider>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          height: "80vh",
        borderRadius:20,
        overflowY:"auto"
        }}
      >

        <AppinntmentCards />
      </Content>
    </Layout>
         <Footer           style={{
            textAlign: 'center',
          }}>
      <Button
          onClick={() => {
            localStorage.removeItem("token");
            nav("/login");
          }}
        >
          Signout
        </Button>
      </Footer>
    </div>
  );
}

export default Dashboard;
