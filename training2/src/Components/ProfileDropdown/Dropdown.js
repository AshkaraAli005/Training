// import React from 'react';
// import { Layout, Row, Col } from 'antd';
// import ProfileDropdown from './ProfileDropdown';

// const { Header, Content } = Layout;

// const Dropdown = () => {
//   return (
//     <Layout>
//       <Header>
//         <Row justify="end">
//           <Col>
//             <ProfileDropdown />
//           </Col>
//         </Row>
//       </Header>
//       <Content>
//         {/* Your main content goes here */}
//       </Content>
//     </Layout>
//   );
// };

// export default Dropdown;
import React, { useMemo, useState } from "react";
import { Avatar, Button, Popover } from "antd";
import { MessageOutlined, UserOutlined } from "@ant-design/icons";
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
      <MessageOutlined style={{ fontSize:"30px",color:"green"}} />
    </Popover>
  );
};
export default Dropdown;
