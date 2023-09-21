import React, { useState } from "react";
import Inputfields from "./Inputfields";
import { Button, Form, Input, Typography, Layout, theme ,message} from "antd";
import { useNavigate } from "react-router-dom";
import Headers from "./Header";
import "./All.css";
const { Content } = Layout;

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
    let ls = localStorage.getItem(formData.email) ||'{ "email": "email not found" }'
  ;
    let user = JSON.parse(ls);

    if (user.email == "email not found") {
      message.error("user not found");
    } else if (user.password == formData.password) {
      localStorage.setItem("token", JSON.stringify(user.email));
      if (user.role == "doctor") {
        nav("/doctor");
        message.success(`welcome , ${user.name}`)
      } else {
        nav("/patient");
        message.success(`welcome , ${user.name}`)
      }
    } else {
      message.error("invalid password");
    }

    // setFormData({});
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
                onFinish={handleSubmit}
                autoComplete="off"
              >
                <Inputfields
                  name={'email'}
                  value={formData.email}
                  fun={handleChange}
                />
                <Inputfields
                  name={'password'}
                  value={formData.password}
                  fun={handleChange}
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
