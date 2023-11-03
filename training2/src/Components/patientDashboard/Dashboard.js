import React from "react";
import { Tabs } from "antd";
import MessageList from "../webHooks/MessageList";
import MessageForm from "../webHooks/MessageForm";

const items = [
  {
    key: "1",
    label: "Sender",
    children: <MessageForm />,
  },
  {
    key: "2",
    label: "Receiver",
    children: <MessageList />,
  },
];
const Dashboard = () => <Tabs defaultActiveKey="1" items={items} />;
export default Dashboard;
