import {
  CheckCircleFilled,
  CheckOutlined,
  CloseCircleFilled,
  CloseOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";
import { Button, List, Tooltip } from "antd";
import { Link } from "react-router-dom";
import React from "react";

const NotificationList = ({ onNotificationClick, data, setdata }) => {
  return (
    <div>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="isRead">
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {item.status === "error" && (
                  <CloseCircleFilled
                    className="icon"
                    style={{ color: "rgba(255,0,0,0.5)" }}
                  />
                )}
                {item.status === "info" && (
                  <InfoCircleFilled
                    className="icon"
                    style={{ color: "	rgba(0,0,255,0.6)" }}
                  />
                )}
                {item.status === "success" && (
                  <CheckCircleFilled
                    className="icon"
                    style={{ color: "rgba(0,255,0,0.5)" }}
                  />
                )}
                {item.status === "warning" && (
                  <InfoCircleFilled
                    className="icon"
                    style={{ color: "rgba(255,255,0,0.7)" }}
                  />
                )}
                <Link
                  onClick={() => onNotificationClick(item)}
                  style={
                    !item.isRead
                      ? { textDecoration: "none", color: "black" }
                      : { textDecoration: "none", color: "grey" }
                  }
                >
                  <h3>{item.message}</h3>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: "20px",
                  width: "270px",
                }}
              >
                <div>
                  <Tooltip
                    title={item.isRead ? "mark as Unread" : "mark as Read"}
                    placement="left"
                  >
                    <Button
                      type="text"
                      onClick={() => {
                        setdata((prev) =>
                          prev.map((values) =>
                            values.notificationId === item.notificationId
                              ? { ...values, isRead: !item.isRead }
                              : values
                          )
                        );
                      }}
                    >
                      <CheckOutlined
                        style={
                          item.isRead ? { color: "blue" } : { color: "black" }
                        }
                      />
                    </Button>
                  </Tooltip>
                  <Button
                    type="text"
                    style={{ marginLeft: "0px" }}
                    onClick={() => {
                      setdata((prev) => {
                        return prev.filter(
                          (values) =>
                            item.notificationId !== values.notificationId
                        );
                      });
                    }}
                  >
                    <CloseOutlined />
                  </Button>
                </div>
                <span>{item.dateTime}</span>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
export default NotificationList;
