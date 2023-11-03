import React, { useState, useEffect } from "react";
import { Button, notification, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import NotificationDrawer from "./NotificationDrawer";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const storedNotifications = JSON.parse(
      localStorage.getItem("notifications")
    );
    if (storedNotifications) {
      setNotifications(storedNotifications);
    }
  }, []);

  const handleNotificationClick = (clickedNotification) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== clickedNotification.id
    );
    localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    setNotifications(updatedNotifications);
    window.location.href = clickedNotification.link;
    setDrawerVisible(false);
  };

  const handleRemoveNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    setNotifications(updatedNotifications);
  };

  const handleRemoveAllNotification = () => {
    localStorage.removeItem("notifications");
    setNotifications([]);
  };

  const handleShowNotifications = () => {
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const showNotification = (id, title, description, link, type) => {
    const newNotification = {
      id,
      title,
      description,
      link,
    };
    const updatedNotifications = [...notifications, newNotification];

    localStorage.setItem("notifications", JSON.stringify(updatedNotifications));

    setNotifications(updatedNotifications);

    notification.open({
      message: newNotification.title,
      description: newNotification.description,
      onClick: () => handleNotificationClick(newNotification),
      type,
    });
  };

  return (
    <div>
      <Button
        onClick={() =>
          showNotification(
            1, // Unique ID for the notification
            "Appointment",
            "Your meeting with the doctor is ready now. Please join the meeting.",
            "/doctor/Appointments",
            "info"
          )
        }
      >
        Button 1
      </Button>
      <Button
        onClick={() =>
          showNotification(
            2,
            "Available",
            "Your Patients are online now",
            "/doctor/My_patients",
            "warning"
          )
        }
      >
        Button 2
      </Button>
      <Button
        onClick={() =>
          showNotification(3, "Notification 3", "Content 3", "/page-3")
        }
      >
        Button 3
      </Button>
      <Button
        onClick={() =>
          showNotification(4, "Notification 4", "Content 4", "/page-4")
        }
      >
        Button 4
      </Button>
      <Button
        onClick={() =>
          showNotification(5, "Notification 5", "Content 5", "/page-5")
        }
      >
        Button 5
      </Button>

      <div style={{ position: "fixed", bottom: 60, right: 20 }}>
        <Badge count={notifications.length} overflowCount={10} offset={[-5, 0]}>
          <Button
            type="primary"
            icon={<BellOutlined style={{ fontSize: 25, color: "black" }} />}
            shape="circle"
            size="large"
            onClick={handleShowNotifications}
            style={{
              backgroundColor: "#74ce6e",
              boxShadow: "0px 0px 30px 5px rgba(0, 0, 0, 0.3)",
            }}
          ></Button>
        </Badge>
      </div>
      <NotificationDrawer
        notifications={notifications}
        visible={drawerVisible}
        onClose={handleCloseDrawer}
        onNotificationClick={handleNotificationClick}
        handleRemoveNotification={handleRemoveNotification}
        handleRemoveAllNotification={handleRemoveAllNotification}
      />
    </div>
  );
};

export default Notification;
