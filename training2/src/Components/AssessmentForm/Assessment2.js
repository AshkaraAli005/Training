import React from "react";
import SpeechToText from "../Authentication/Speech";
import { Form, Input, Select, Button } from "antd";
import InpText from "../FormFields/FormInputComonent";
import Server from "./Server";
import TextArea from "../FormFields/TextareaInput";

const Assessment2 = () => {
  const [form] = Form.useForm();
  const Topic = "Medical Details";

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
        <Form
          form={form}
          name="medical-form2"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 30 }}
          onFinish={onFinish}
        >
          <h1>{Topic}</h1>
          <InpText name="Medical Detail 1" />
          <InpText name="Medical Detail 2" />
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

export default Assessment2;
