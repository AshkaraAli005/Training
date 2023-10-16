import React, { useEffect, useRef, useState } from "react";
import { Button, Select, Space, Input, message } from "antd";
import { AudioFilled, CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Language from "../assets/Language.json";

const SpeechToText = () => {
  const [text, setText] = useState();
  const lang = useRef("en-IN");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  const handleStart = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: lang.current,
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return console.log("not supported")
  }

  return (
    <div
      className="textPad"
      style={{ borderStyle: "outset", paddingLeft: "20px" }}
    >
      <Input.TextArea
        rows={20}
        bordered={false}
        placeholder="Click on the Start button and begin to speak"
        style={{ width: "35vw", resize: "none" }}
        value={text}
      />
      <div className="functionButtons">
        {listening ? (
          <Button
            className="stopButton"
            type="primary"
            onClick={SpeechRecognition.stopListening}
            danger
          >
            <LoadingOutlined />
            Stop
          </Button>
        ) : (
          <Space className="speech-btns">
            <Button
              className="startButton"
              type="primary"
              onClick={handleStart}
            >
              <AudioFilled /> Start
            </Button>
            <Button
              className="clearButton"
              type="primary"
              danger
              onClick={() => {
                console.log(text);
                resetTranscript();
              }}
            >
              <CloseOutlined /> Clear
            </Button>
            <Select
              className="language"
              defaultValue="en-IN"
              onChange={(value) => {
                lang.current = value;
              }}
              options={Language}
            />
          </Space>
        )}
      </div>
    </div>
  );
};

export default SpeechToText;
