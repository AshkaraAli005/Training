import React, { useState } from "react";
import Inputfields from "./Inputfields";
import { Button, Form, Typography, Layout, theme, message } from "antd";
import { useNavigate } from "react-router-dom";
import Headers from "./Header";
import axios from "axios";
import "./All.css";
const { Content } = Layout;

function Login() {
  const { Title } = Typography;
  const [postData, setPostData] = useState([]);

  const dataPush = () => {
    axios
      .post("http://192.168.26.185:5000/user/register", {
        username: "Ashkar Ali ",
        email: "aliashkar@gmail.com",
        password: "1234@aAAa",
      })
      .then((res) => console.log(res)).catch((err) => console.log(err));
  };

  const apiTest = () => {
    axios
      .get("https://course-api.com/react-useReducer-cart-project")
      .then((response) => {
        const datas = [];
        for (let key in response.data) {
          datas.push({ ...response.data[key], id: key });
        }
        setPostData(datas);
        message.success("Api fetched");
        console.log(datas);
      })
      .catch((err) => {
        message.success(err.message);
        console.log(err);
      });
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const nav = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    let ls =
      localStorage.getItem(values.email) || '{ "email": "email not found" }';
    let user = JSON.parse(ls);

    if (user.email == "email not found") {
      message.error("user not found");
    } else if (user.password == values.password) {
      localStorage.setItem("token", JSON.stringify(user.email));
      if (user.role == "doctor") {
        dataPush();

        nav("/doctor");
        message.success(`welcome , ${user.name}`);
      } else {
        nav("/patient");
        message.success(`welcome , ${user.name}`);
      }
    } else {
      message.error("invalid password");
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
                onFinish={handleSubmit}
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
