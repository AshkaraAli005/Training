import React, { useState } from "react";
import { Popover } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import ProfileContent from "./ProfileContent";
const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={<ProfileContent />}
      trigger="click"
      open={open}
      style={{ width: "100px", height: "200px" }}
      onOpenChange={handleOpenChange}
    >
      <MessageOutlined style={{ fontSize: "30px", color: "green" }} />
    </Popover>
  );
};
export default Dropdown;
