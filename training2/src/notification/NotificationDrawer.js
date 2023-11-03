import React from "react";
import NotificationList from "./NotificationList";
import { Button, Drawer } from "antd";

const NotificationDrawer = ({
  notifications,
  visible,
  onClose,
  onNotificationClick,
  clear,
  data,
  setdata,
}) => {
  return (
    <Drawer
      open={visible}
      onClose={onClose}
      title="Your Notifications"
      footer={
        <Button type="link" onClick={() => clear()}>
          clear all
        </Button>
      }
    >
      <NotificationList
        notifications={notifications}
        onNotificationClick={onNotificationClick}
        data={data}
        setdata={setdata}
      />
    </Drawer>
  );
};
export default NotificationDrawer;
