import React, { useState } from "react";
import axios from "axios";

const MessageForm = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5050/post/messages", { msg: content })
      .then(() => {
        console.log("done"); // Optionally, you can display a success message or update the message list.
      })
      .catch((error) => {
        console.error("Error posting message:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default MessageForm;
