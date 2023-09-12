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
          
            background: colorBgContainer,
          }}
        >
          <div style={{display:"flex" ,justifyContent:"center", alignItems:"center"}}>
          <div style={{ width:"600px",margin:"auto"}} >
      <Title>Sign Up</Title>
      <Form
        name="basic"

        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 800,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          rules={[{ required: true, message: "Please enter your name!" }]}
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
          rules={[{ required: true, message: "Please enter your password!" }]}
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
