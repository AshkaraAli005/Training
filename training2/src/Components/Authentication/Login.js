import React, { useState } from "react";
import Inputfields from "../Inputfields";
import { Button, Form, Typography, Layout, theme, message, App } from "antd";
import { useNavigate } from "react-router-dom";
import Headers from "../Header";
import Axios from "../Axios";
import "../All.css"

const { Content } = Layout;

function Login() {
  const { Title } = Typography;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const nav = useNavigate();

  const login = async (values) => {
    try {
      const response = await Axios.post("/login", {
        email: values.email,
        password: values.password,
      });
      console.log(values);
      localStorage.setItem("token", JSON.stringify(response.data));
      localStorage.setItem(
        "refresh-token",
        JSON.stringify(response.data.user["refresh"] || "")
      );
      if (!response.data.user) {
        message.error(response.data.message);
      }
      if (response.data.user.role === "doctor") {
        nav("/doctor");
        message.success(`welcome , ${response.data.user.username}`);
      } else if (response.data.user.role === "patient") {
        nav("/patient");
        message.success(`welcome , ${response.data.user.username}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      <Layout>
        <Headers />

        <Content
          className="form-content"
          style={{ background: colorBgContainer }}
        >
          <div className="form-div1">
            <div className="form">
              <Title style={{ marginLeft: "-200px", color: "#459c22" }}>
                Login
              </Title>

              <Form
                name="basic"
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  width: "600px",
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={login}
                autoComplete="off"
              >
                <Inputfields
                  name={"email"}
                  rules={[
                    { required: true, message: `Please enter the mail id` },
                  ]}
                />
                <Inputfields
                  name={"password"}
                  rules={[
                    { required: true, message: `Please enter the password` },
                  ]}
                />

                <Form.Item
                  wrapperCol={{
                    offset: 5,
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{ backgroundColor: "#459c22" }}
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    type="link"
                    size="large"
                    style={{ Color: "#459c22" }}
                    href="/signup"
                  >
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Login;
