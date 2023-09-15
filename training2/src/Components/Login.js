import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";
import Headers from "./Header";
const { Header, Content, Sider } = Layout;

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
        if(user.role == "doctor"){
          nav("/doctor")
        }else {
          nav("/patient")
        }
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
              margin: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "600px",
                background: "transparent",
                border: "2px solid rgba(255, 255, 255, .2)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
                color: "#fff",
                borderRadius: "10px",
                padding: "30px 40px",
                paddingLeft: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Title style={{ marginLeft: "-200px" ,color:"#459c22" }}>Login</Title>

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
                    
                    style={{height:"50px",fontSize:"15px", borderColor:"#88da68"}}
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
                    style={{height:"50px",fontSize:"15px" ,borderColor:"#88da68"}}
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
                  <Button type="primary" size="large" style={{backgroundColor:"#459c22",}} htmlType="submit">
                    Submit
                  </Button>
                  <Button type="link" size="large" style={{Color:"#459c22",}}  href="/signup">
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
