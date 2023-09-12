import React from "react";
import { Card, Space } from "antd";
import Data from "./appodata.json";
function AppinntmentCards({ name }) {
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
            display: "flex",
            flexDirection: "row",

          }}
        >
          <div>
            <h4>{new Date(item.appointment_date_time).getDate()}</h4>
          </div>
          <div>
            <h4 style={{ border: 0, padding: 0, margin: 0 }}>
              {item.salutation}. {item.doctor_name}
            </h4>
            <span style={{ border: 0, padding: 0, margin: 0 }}>{new Date(item.appointment_date_time).getHours()}:0{new Date(item.appointment_date_time).getMinutes()}</span>
            <p style={{ border: 0, padding: 0, margin: 0 }}>
              your appointment will be confirmed soon
            </p>
          </div>
        </Card>
      ))}
    </Space>
  );
}

export default AppinntmentCards;
