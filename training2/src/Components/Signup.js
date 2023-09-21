import React, { useState } from "react";
import Headers from "./Header";
import Inputfields from "./Inputfields";
import { useNavigate } from "react-router-dom";
import { Form, Button, Typography, Layout, theme, Radio, message } from "antd";

const { Title } = Typography;
const { Content } = Layout;

const Register = () => {
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
    let regname = /^[a-zA-Z\-]+$/;

    let regemail =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    let regpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if (regname.test(formdata.name) == false) {
      message.warning("please enter valid name");
    } else if (localStorage.getItem(formdata.email)) {
      message.warning("email already exists");
    } else if (regemail.test(formdata.email) == false) {
      message.warning("Invalid Email Address");
    } else if (regpassword.test(formdata.password) == false) {
      message.warning(
        <>
          <p>
            Password contains at least 8 characters and at most 20 characters.
          </p>
          <p> It contains at least one digit.</p>
          <p> It contains at least one upper case alphabet.</p>
          <p> It contains at least one lower case alphabet.</p>
          <p>
            {" "}
            It contains at least one special character which includes
            !@#$%&*()-+=^.
          </p>
          <p>It doesn’t contain any white space.</p>
        </>
      );
    } else {
      localStorage.setItem(formdata.email, JSON.stringify(formdata));

      let all = JSON.parse(localStorage.getItem("alluser")) || [];

      localStorage.setItem(
        "alluser",

        JSON.stringify([...all, formdata.email])
      );

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
          className="form-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="form-div1">
            <div className="form">
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
                <Inputfields
                  name={"name"}
                  value={formdata.name}
                  fun={handleChange}
                />
                <Inputfields
                  name={"email"}
                  value={formdata.email}
                  fun={handleChange}
                />

                <Inputfields
                  name={"password"}
                  value={formdata.Password}
                  fun={handleChange}
                />
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
                    style={{ backgroundColor: "#459c22", marginLeft: "40px " }}
                    htmlType="submit"
                  >
                    Sign up
                  </Button>
                </Form.Item>
                <p>
                  Already have an account?{" "}
                  <a href="/" style={{ color: "green" }}>
                    Login here
                  </a>
                  .
                </p>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Register;
