import React, { useState } from "react";
import Inputfields from "./Inputfields";
import { Button, Form, Typography, Layout, theme, message } from "antd";
import { useNavigate, redirect } from "react-router-dom";
import Headers from "./Header";
import axios from "axios";
import "./All.css";
const { Content } = Layout;

function Login() {
  const { Title } = Typography;

  const instance = axios.create({
    baseURL: "http://192.168.26.185:5000",
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const nav = useNavigate();

  const login = async (values) => {
    try {
      const response = await axios.post("http://192.168.26.210:5000/login", {
        email: values.email,
        password: values.password,
      });
      console.log(values);
      localStorage.setItem("token", JSON.stringify(response.data));
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
