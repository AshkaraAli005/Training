import React from "react";
import { List } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CrownOutlined,
  ProfileOutlined,
  ReconciliationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const data = [
  { icon: <UserOutlined />, name: "Account", link: "Profile" },
  {
    icon: <ReconciliationOutlined />,
    name: "Assessment",
    link: "Assessments",
  },
  {
    icon: <CalendarOutlined />,
    name: "Consultation",
    link: "consultation",
  },
  {
    icon: <ProfileOutlined />,
    name: "Health Records",
    link: "Health_Info",
  },
  {
    icon: <CrownOutlined />,
    name: "Membership Plans",
    link: "SubcPlans",
  },
  {
    icon: <ProfileOutlined />,
    name: "Prescription",
    link: "Your_prescriptions",
  },
  { icon: <ProfileOutlined />, name: "Orders", link: "YourOrders" },
];
const ChatList = () => (
  <div style={{ height: "243px", overflowY: "scroll" }} className="lists">
    <List
      size="small"
      bordered
      style={{ borderRadius: "5px" }}
      dataSource={data}
      renderItem={(item) => (
        <Link to={`/patient/${item.link}`}>
          <List.Item style={{ backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div style={{ color: "green", font: "bold", fontSize: "20px" }}>
                {item.icon}
              </div>
              <div>{item.name}</div>
            </div>
            <ArrowRightOutlined />
          </List.Item>
        </Link>
      )}
    />
  </div>
);
export default ChatList;
