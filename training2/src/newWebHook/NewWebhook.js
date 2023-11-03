import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);

  // Function to render new messages
  const renderMessage = (message) => {
    setMessages([...messages, message]);
  };

  // Function to fetch new messages
  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://your-flask-app-url.com/messages'); // Replace with your Flask app's endpoint
      if (response.data) {
        renderMessage(response.data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();

    // Periodically fetch messages, e.g., every 5 seconds
    const interval = setInterval(fetchMessages, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Webhook Chat App</h1>
      <div className="chat">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
