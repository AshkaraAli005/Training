import React from "react";
import { Button, Card, Space } from "antd";
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
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                margin: "10px 10px 10px 10px",
                display: "flex",
                marginRight: "30px",
                flexDirection: "column",
                justifyContent: "center",
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
              style={{
                display: "flex",
                flexFlow: "row wrap ",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button type="dashed" className="card-info-btn">
                Health info
              </Button>
              <Button type="dashed" className="card-info-btn">
                Assessment
              </Button>
              <Button type="dashed" className="card-info-btn">
                Case Notes
              </Button>
              <Button type="dashed" className="card-info-btn">
                Preascription
              </Button>
              <Button type="dashed" className="card-info-btn">
                General Assessment
              </Button>
              <Button type="dashed" className="card-info-btn">
                Stress Management
              </Button>
              <Button type="dashed" className="card-info-btn">
                Stress Management
              </Button>
              <Button type="dashed" className="card-info-btn">
                Stress Management
              </Button>
              <Button type="dashed" className="card-info-btn">
                Stress Management
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </Space>
  );
}

export default AppinntmentCards;
