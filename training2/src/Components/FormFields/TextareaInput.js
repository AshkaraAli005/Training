import React from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

const TextArea = ({ name }) => {

  return (
    <div>  
      <Form.Item
        label={name}
        name={name}
        labelAlign="left"
        rules={[{ required: false }]}
      >
        <Input.TextArea />
      </Form.Item>

    </div>
  );
};

export default TextArea;
