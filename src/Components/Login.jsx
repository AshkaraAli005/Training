import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;
import Headers from "./Header";
import { LockOutlined ,UserOutlined  } from "@ant-design/icons";

function Login() {
  const { Title } = Typography;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nav = useNavigate();

  const handleSubmit = () => {
    console.log(formData);
    let ls = localStorage.getItem(formData.email) || {
      email: "email not found",
    };
    let user = JSON.parse(ls);

    if (user.email == "email not found") {
      alert("user not found");
    } else {
      if (user.password == formData.password) {
        localStorage.setItem("token", JSON.stringify(user.email));
        nav("/mainpage");
      } else {
        alert("invalid password");
      }
    }
    setFormData({});
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
          style={{
            padding: 24,
            margin: 0,
            marginTop: 50,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Form
        name="login"
        onFinish={handleSubmit}
        initialValues={{ remember: true }}
        style={{
          width: '420px',
          background: 'transparent',
          border: '2px solid rgba(255, 255, 255, .2)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
          color: '#fff',
          borderRadius: '10px',
          padding: '30px 40px',
        }}
      >
        <h1 style={{ fontSize: '36px', textAlign: 'center' }}><Title>Login</Title></h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          style={{ width: '100%', marginTop: '20px' }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          style={{ width: '100%', marginTop: '20px' }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', margin: '15px 5px 15px' }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="#">Forgot password</a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%', height: '45px', borderRadius: '40px' }}>
            Log in
          </Button>
        </Form.Item>
        <div style={{ fontSize: '14.5px', textAlign: 'center', margin: '20px 0 15px' }}>
          <p>
            Don't have an account? <a href="#">Register now</a>
          </p>
        </div>
      </Form>
      </div> */}
             <div style={{ width: "600px", margin: "auto" }}>
              <Title>Login</Title>
              <Form
                name="basic"
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={handleSubmit}
                autoComplete="off"
              >
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </Form.Item>

                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 5,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button type="link" href="/signup">
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
