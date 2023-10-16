import React, { useState, useEffect } from "react";

const SpeechRecognitionComponent = () => {
  const [recognizing, setRecognizing] = useState(false);
  const [transcription, setTranscription] = useState("");
  let recognition;

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      recognition = new window.webkitSpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setRecognizing(true);
      };

      recognition.onend = () => {
        setRecognizing(false);
      };

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setTranscription(transcript);
      };
    } else {
      console.error("Speech recognition is not supported in this browser.");
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const startRecognition = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
      setRecognizing(false);
    }
  };

  return (
    <div>
      <button onClick={startRecognition}>Start Recognition</button>
      <button onClick={stopRecognition}>Stop Listening</button>
      <div>{recognizing ? "Listening..." : "Not listening"}</div>
      <div>Transcription: {transcription}</div>
    </div>
  );
};

export default SpeechRecognitionComponent;
