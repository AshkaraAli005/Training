import React from "react";
import { Form, Input } from "antd";

const Inputfields = ({ name, data  , rules}) => {
  return (
    <Form.Item
      name={name}
      value={data}
      rules={rules}
    >
      {name == "password" ? (
        <Input.Password className="input-field" placeholder={name} />
      ) : (
        <Input className="input-field" placeholder={name} />
      )}
    </Form.Item>
  );
};
Inputfields.defaultProps = {
  data: "",
  name:"",
};

export default Inputfields;




