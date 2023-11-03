import React, { useEffect, useState } from "react";
import axios from "axios";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://127.0.0.1:5050/get/messages")
        .then((response) => {
          console.log(response);

          if (response.data !== messages[0]) {
            setMessages([response.data, ...messages]);
          }
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;                                 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

