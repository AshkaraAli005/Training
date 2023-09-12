import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  message,
  Layout,
  theme,
} from "antd";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;
import Headers from "./Header";

function Register() {
  const [formdata, setFormdata] = useState("");
  const nav = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = () => {
    if (localStorage.getItem(formdata.email)) {
      alert("email already exist");
    } else {
      localStorage.setItem(formdata.email, JSON.stringify(formdata));
      console.log(formdata);
      setFormdata({});
      nav("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <div style={{ margin: "auto" }}>
      <Headers />
      <Layout>
        <Content
          style={{
            padding: 24,
            margin: 0,
            marginTop: 50,
            height: "90vh",
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
              <Title style={{ marginLeft: "-200px" }}>Sign Up</Title>
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
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input
                    name="name"
                    value={formdata.name}
                    placeholder="Name"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    {
                      type: "email",
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input
                    name="email"
                    value={formdata.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password
                    name="password"
                    value={formdata.Password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 5,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Sign up
                  </Button>
                </Form.Item>
                <p>
                  Already have an account? <a href="/login">Login here</a>.
                </p>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Register;
