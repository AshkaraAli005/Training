import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";
import ChatList from "./chatList";

const ProfileContent = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ marginRight: "20px" }}
        />
        <div>
          <h3 style={{ margin: 0 }}>I'm Clara</h3>
          <span style={{ margin: 0 }}>Care Navigator</span>
        </div>
      </div>
      <p>Hello ask me a question or Select one option Below</p>
      <h3>How can we Help you ?</h3>

      <ChatList />
      <Button
        style={{
          width: "300px",
          margin: "20px 10px 10px 30px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Ask Question
      </Button>
    </div>
  );
};

export default ProfileContent;
