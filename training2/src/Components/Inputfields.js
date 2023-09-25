import React from "react";
import { Form, Input } from "antd";

const Inputfields = ({ name, data }) => {
  return (
    <Form.Item
      name={name}
      value={data}
      rules={[{ required: true, message: `Please enter the ${name}` }]}
    >
      {name == "password" ? (
        <Input.Password className="input-field" placeholder={name} />
      ) : (
        <Input className="input-field" placeholder={name} />
      )}
    </Form.Item>
  );
};

export default Inputfields;
