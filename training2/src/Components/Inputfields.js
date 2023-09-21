import React from "react";
import { Form , Input } from "antd";

 const Inputfields = ({ name, data ,fun }) => {
    return (
      <Form.Item rules={[{ required: true, message: "Please enter your name!" }]}>
        <Input
          name={name}
          className="input-field"
          value={data}
          placeholder={name}
          onChange={fun}
        />
      </Form.Item>
    );
  };
  
  export default Inputfields;