// ChatNotification.js

import React, { useState, useEffect } from "react";

const ChatNotification = () => {
  const [notifications, setNotifications] = useState([]);

  // Example WebSocket connection (you need to implement WebSocket server)
  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:6000/webhook");

    socket.onmessage = (event) => {
      const newNotification = JSON.parse(event.data);
      setNotifications([...notifications, newNotification]);
    };

    return () => {
      socket.close();
    };
  }, [notifications]);

  return (
    <div>
      <h2>Chat Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>message({notification.message})</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatNotification;
