import React, { useEffect, useState } from "react";
import datas from "./dataConsts.json";
import NotificationDrawer from "./NotificationDrawer";
import { Badge, Button, notification } from "antd";
import { BellOutlined } from "@ant-design/icons";
const NewNotification = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };
  const [data, setdata] = useState(datas);
  const [latestNotification, setLatestNotification] = useState(null);

  useEffect(() => {
    if (latestNotification) {
      const { message, status } = latestNotification;
      const notificationType = getNotificationType(status);

      notification.open({
        message: message,
        description: status,
        type: notificationType, // Set the notification type based on status
      });
    }
  }, [latestNotification]);
  const getNotificationType = (status) => {
    switch (status) {
      case "info":
        return "info";
      case "warning":
        return "warning";
      case "error":
        return "error";
      case "success":
        return "success";
      default:
        return "info"; // Default to info if status is unknown
    }
  };
  const addRandomData = () => {
    const newNotification = {
      notificationId: data.length + 1,
      status: ["info", "warning", "error", "success"][
        Math.floor(Math.random() * 4)
      ],
      message: `New Notification Message ${data.length + 1}`,
      dateTime: generateRandomDateTime(),
      path: "pdf",
      isRead: false,
    };
    setdata([...data, newNotification]);
    setLatestNotification(newNotification);
  };

  const generateRandomDateTime = () => {
    const year = 2023;
    const month = 11;
    const day = Math.floor(Math.random() * 30) + 1;
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);

    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  const clearAll = () => {
    setdata([]);
  };

  return (
    <div>
      <div style={{ position: "fixed", bottom: 60, right: 20 }}>
        <Badge count={data.length} overflowCount={10} offset={[-5, 0]}>
          <Button
            type="primary"
            icon={<BellOutlined style={{ fontSize: 25 }} />}
            shape="circle"
            size="large"
            onClick={() => setDrawerVisible(true)}
            style={{
              backgroundColor: "green",
              boxShadow: "0px 0px 30px 5px rgba(0, 0, 0, 0.3)",
            }}
          ></Button>
        </Badge>
      </div>
      <Button onClick={addRandomData}>add data</Button>
      <NotificationDrawer
        notifications={datas}
        visible={drawerVisible}
        onClose={handleCloseDrawer}
        data={data}
        setdata={setdata}
        clear={clearAll}
      />
    </div>
  );
};

export default NewNotification;
