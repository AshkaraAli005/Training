import React from "react";
import SpeechToText from "../Speech";
import TextArea from "../FormFields/TextareaInput";
import InpText from "../FormFields/FormInputComonent";
import { Button, Form } from "antd";
import Server from "./Server";

const Assessment3 = () => {
  const [form] = Form.useForm();
  const Topic = "Assessment 3";

  const onFinish = (values) => {
    const message = Object.entries(values)
      .map((data) => `**${data[0]}** : ${data[1]}`)
      .join("\n");

    Server(message, Topic);
    console.log("Received values:", values);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "70vh",
        marginLeft: "0px",
      }}
    >
      <div className="medical-form">
        <h1>Assessment Form 3</h1>
        <Form
          form={form}
          name="medical-form3"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 30 }}
          onFinish={onFinish}
        >
          <InpText name="Detail 1" />
          <InpText name="Detail 2" type="number" />
          <InpText name="Detail3" />
          <TextArea name="Description 1" />
          <TextArea name="Description 2" />
          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <SpeechToText />
    </div>
  );
};

export default Assessment3;
