import React from "react";
import {
  Button,
  Card,
  Popconfirm,
  Popover,
  Space,
  Modal,
  Row,
  Col,
} from "antd";
import Data from "./appodata.json";
function AppinntmentCards({ name }) {
  const month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JLY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const summary_btns = [
    { value: "Health info", sub: ["01", "02", "03"] },
    { value: "Assessments", sub: ["04", "05", "06"] },
    { value: "Case Notes", sub: ["07", "08", "09"] },
    { value: "Preascription", sub: ["10", "11", "12"] },
    { value: "General Assessments", sub: ["13", "14", "15"] },
    { value: "Stress Management", sub: ["16", "17", "18"] },
    { value: "Feedback", sub: ["19", "20", "21"] },
  ];

  return (
    <Space
      direction="vertical"
      size={16}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Data.map((item) => (
        <Card
          key={item.appointment_id}
          style={{
            boxShadow: "1px 1px 5px  rgba(0,0,0,0.1)",
            minwidth: 600,
            overflowX: "auto",
          }}
        >
          <div
            className="cardContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              className="dateTime"
              style={{
                margin: "10px 10px 10px 10px",
                display: "flex",
                marginRight: "30px",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4 style={{ border: 0, padding: 0, margin: 0 }}>
                {new Date(item.appointment_date_time).getDate()}
              </h4>
              <h4 style={{ border: 0, padding: 0, margin: 0 }}>
                {month[new Date(item.appointment_date_time).getMonth()]}
              </h4>
              <h4 style={{ border: 0, padding: 0, margin: 0 }}>
                {new Date(item.appointment_date_time).getFullYear()}
              </h4>
            </div>
            <br />
            <div
              className="dataDetails"
              // span={8}
              style={{
                marginLeft: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                minwidth: "300px",
              }}
            >
              <h4 style={{ border: 0, padding: 0, margin: 0 }}>
                {item.salutation}. {item.doctor_name}
              </h4>
              <span style={{ border: 0, padding: 0, margin: 0 }}>
                {new Date(item.appointment_date_time).getHours()}:0
                {new Date(item.appointment_date_time).getMinutes()}
              </span>
              <p style={{ border: 0, padding: 0, margin: 0 }}>
                your appointment will be confirmed soon
              </p>
            </div>
            <br />
            <div
              className="summaryBtns"

              style={{
                display: "flex",
                flexFlow: "row wrap ",
                gap:"5px",
                alignItems: "center",
              }}
            >
              {summary_btns.map((items) => (
                <Popover
                  content={
                    <Space>
                      {items.sub.map((subitem) => (
                        <Button size="small">{subitem}</Button>
                      ))}
                    </Space>
                  }
                >
                  <Button type="dashed" className="card-info-btn">
                    {items.value}
                  </Button>
                </Popover>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </Space>
  );
}

export default AppinntmentCards;
