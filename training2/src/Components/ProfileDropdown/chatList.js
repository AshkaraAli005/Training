import React from "react";
import { Divider, List, Typography } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CrownOutlined,
  ProfileOutlined,
  ReconciliationOutlined,
  UserOutlined,
} from "@ant-design/icons";
const data = [
  { icon: <UserOutlined />, name: "Account" },
  { icon: <ReconciliationOutlined />, name: "Assessment" },
  { icon: <CalendarOutlined />, name: "Consultation" },
  { icon: <ProfileOutlined />, name: "Health Records" },
  { icon: <CrownOutlined />, name: "Membership Plans" },
  { icon: <ProfileOutlined />, name: "Prescription" },
  { icon: <ProfileOutlined />, name: "Orders" },
];
const ChatList = () => (
  <div style={{ height: "250px", overflowY: "scroll" }} className="lists">
    <List
      size={64}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{backgroundColor:"white"}}>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px",alignItems:"center" }}>
            <div style={{ color: "green", font: "bold",fontSize:"20px" }}>{item.icon}</div>
            <div>{item.name}</div>
          </div>
          <ArrowRightOutlined />
        </List.Item>
      )}
    />
  </div>
);
export default ChatList;
