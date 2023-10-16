import React from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

const InpText = ({ name, type }) => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <Form.Item
      label={name}
      name={name}
      labelAlign="left"
      rules={[{ required: true, message: `Please enter ${name}` }]}
    >
      {name == "Gender" ? (
        <Select>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      ) : (
        <Input type={type} />
      )}
    </Form.Item>
  );
};

export default InpText;
