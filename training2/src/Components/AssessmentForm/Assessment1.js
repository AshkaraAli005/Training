import React from "react";

import TextArea from "../FormFields/TextareaInput";
import InpText from "../FormFields/FormInputComonent";
import { Button, Form } from "antd";
import Server from "./Server";
import SpeechToText from "../SpeechToText/speectToText";

const Assessment1 = () => {
  const [form] = Form.useForm();
  const Topic = "Personal Details";

  const onFinish = (values) => {
    const message = Object.entries(values)
      .map((data) => `**${data[0]}** : ${data[1]}`)
      .join("\n");

    Server(message, Topic);
    form.resetFields();
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
        <h1>{Topic}</h1>
        <Form
          form={form}
          name="medical-form1"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 30 }}
          onFinish={onFinish}
        >
          <InpText name="Name" />
          <InpText name="Age" type="number" />
          <InpText name="Gender" />
          <TextArea name="Allergies" />
          <TextArea name="Other Medical Details" />
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

export default Assessment1;
