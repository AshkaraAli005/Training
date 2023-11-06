import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Typography } from "antd";
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
          style={{ marginRight: "14px" }}
        />
        <div>
          <Typography
            style={{ margin: 0, fontSize: "18px", fontWeight: "bolder" }}
          >
            I'm Clara
          </Typography>
          <span
            style={{ margin: 0, fontFamily: "sans-serif", fontSize: "14px" }}
          >
            Care Navigator
          </span>
        </div>
      </div>
      <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
        Hello ask me a question or Select one option Below
      </p>
      <h3 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
        How can we Help you ?
      </h3>

      <ChatList />

      <Button
        style={{
          width: "300px",
          margin: "25px 5px 5px 15px",
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
