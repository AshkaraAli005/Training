import React, { useState } from "react";
import Headers from "./Header";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Typography,
  message,
  Layout,
  theme,
  Radio,
} from "antd";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;

function Register() {
  const [formdata, setFormdata] = useState("");
  const nav = useNavigate();

  const [value, setValue] = useState(1);
  const onRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    setFormdata({ ...formdata, role: e.target.value });
  };

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
      nav("/");
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
              <Title style={{ marginLeft: "-200px", color: "#459c22" }}>
                Sign Up
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
                    style={{
                      height: "50px",
                      fontSize: "15px",
                      borderColor: "#88da68",
                    }}
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
                    style={{
                      height: "50px",
                      fontSize: "15px",
                      borderColor: "#88da68",
                    }}
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
                    style={{
                      height: "50px",
                      fontSize: "15px",
                      borderColor: "#88da68",
                    }}
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
                  <Radio.Group onChange={onRadio} value={formdata.role}>
                    <Radio value={"doctor"}>Doctor</Radio>
                    <Radio value={"patient"}>Patient</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 5,
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{ backgroundColor: "#459c22" ,marginLeft: "40px " }}
                    htmlType="submit"
                  >
                    Sign up
                  </Button>
                </Form.Item>
                <p>
                  Already have an account? <a href="/" style={{color:"green"}}>Login here</a>.
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
