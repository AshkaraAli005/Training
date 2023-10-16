import React from "react";
import { Tabs } from "antd";
import Assessment1 from "./Assessment1";
import Assessment2 from "./Assessment2";
import Assessment3 from "./Assessment3";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Assessment 1",
    children: <Assessment1 />,
  },
  {
    key: "2",
    label: "Assessment 2",
    children: <Assessment2 />,
  },
  {
    key: "3",
    label: "Assessment 3",
    children: <Assessment3 />,
  },
];
const AssessmentContent = () => (
  <Tabs defaultActiveKey="1" items={items}  />
);
export default AssessmentContent;
