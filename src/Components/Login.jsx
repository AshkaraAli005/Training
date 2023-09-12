import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const { Title } = Typography;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
        nav("/");
      } else {
        alert("invalid password");
      }
    }
    setFormData({});
  };

  return (
    <div>
      <Title>Login</Title>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
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
  );
}

export default Login;
