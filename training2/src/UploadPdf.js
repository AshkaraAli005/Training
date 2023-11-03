import React from "react";
import axios from "axios";
import { Button, message, Typography, notification, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function UploadPdf() {
  const onFinish = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/webhook",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        if (response.data.message) {
          notification.success({ message: response.data.message });
        } else {
          notification.error({ message: response.data.error });
        }
      } else {
        message.error("Error uploading the PDF.");
      }
    } catch (error) {
      message.error("Error: " + error.message);
    }
  };

  const props = {
    name: "file",
    multiple: false,
    accept: ".pdf",
    customRequest: ({ file }) => onFinish(file),
  };

  return (
    <div className="medicalForm">
      <Typography.Title level={3}>Upload PDF</Typography.Title>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload PDF</Button>
      </Upload>
    </div>
  );
}

export default UploadPdf;
